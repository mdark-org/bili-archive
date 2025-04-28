import { Page, Root } from "./shared";
import {Feed, FeedOptions} from "feed";
import {compileMarkdown} from "@content-collections/markdown";


export class DataSource {
  constructor(public pageTree: Root, public pageMap: Map<string, Page>) {
  }

  async getPageBySlug(slugs?: string[] | undefined) {
    const slug = ['', ...(slugs ?? [])].join('/')
    return this.pageMap.get(slug) ?? null
  }

  async getPageByHref(href: string) {
    let url = href.split('#')?.[0]
    return this.pageMap.get(url)
  }
  async generateStaticParams() {
    const slugs = this.pageMap.keys().map(k => {
      if(k.startsWith('/')) {
        return k.split('/').slice(1)
      }
      return k.split('/')
    })

    return Array.from(slugs.map(it => ({
      slug: it
    })))
  }

  async getPages() {
    return Array.from(this.pageMap.values())
  }

  async getFirstPages() {
    const pages = Array.from(this.pageMap.values())
    return pages.sort((a,b) => (b.data?.date?.getTime() ?? 0) - (a.data?.date?.getTime() ?? 0))[0]
  }

  private generateFeed(feedOption?: Partial<FeedOptions> & {baseUrl: string}) {
    const site = feedOption?.baseUrl!
    const feedOptions = {
      title: `${this.pageTree.title} | RSS Feed`,
      description: this.pageTree.description,
      id: this.pageTree.name ??  site,
      link: site,
      language: "zh-CN",
      image: `${site}${this.pageTree.icon}`,
      favicon: `${site}/favicon.ico`,
      copyright: 'Auto2Doc',
      ...feedOption,
    };
    const feed = new Feed(feedOptions);
    return feed;
  }

  async collectRssItem(baseUrl: string) {
    const pages = await this.getPages()
    const rssPages = pages.filter(it => it.type === 'page' && !it.external)
      .filter(it => it && it.data?.rss !== false && !it.external)
      .toSorted((a,b) => (b?.data?.date?.getTime() ?? 0) - (a?.data?.date?.getTime() ?? 0))
    const compilePage =async (p: Page) => {
      return await compileMarkdown({cache: cacheFn}, {
        _meta: {
          filePath: '',
          fileName: '',
          directory: '',
          path: '',
          extension: 'md'
        },
        content: p!.data!.content ?? ''
      })
    }
    const res =rssPages.map(async (p) => ({
      id: p!.data!.bvid,
      date: p!.data!.date ?? new Date(),
      title: p!.data!.title,
      description: p!.data!.description ?? "",
      link: `${baseUrl}${p!.url}`,
      content: await compilePage(p),
    }))
    return Promise.all(res)
  }

  async buildRSS(baseUrl: string, feed?: Feed) {
    let f = feed ?? this.generateFeed()
    const rssItems = await this.collectRssItem(baseUrl)
    rssItems.slice(0, 30).forEach(it => f.addItem(it))
    return f
  }
}

// @ts-ignore
const cacheFn = async (i, compute) => compute(i)
