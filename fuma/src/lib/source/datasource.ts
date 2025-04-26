
import {Folder, Page, Root, Node} from "@/lib/source/shared";
import {Feed, FeedOptions} from "feed";
import {config} from "../../../config";
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

  private generateFeed(feedOption?: Partial<FeedOptions> & {baseUrl: string}) {
    const site = feedOption?.baseUrl!
    const feedOptions = {
      title: `${this.pageTree.title} | RSS Feed`,
      description: this.pageTree.description,
      id: this.pageTree.name ??  site,
      link: config.feed?.link ?? site,
      language: config.feed?.language ?? "zh-CN",
      image: config.feed?.image ?? `${site}${this.pageTree.icon}`,
      favicon: config.feed?.favicon ?? `${site}/favicon.ico`,
      copyright: config.feed?.copyright ?? 'Auto2Doc',
      ...feedOption,
    };
    const feed = new Feed(feedOptions);
    return feed;
  }

  async collectRssItem() {
    const pages = await this.getPages()
    const rssPages = pages.filter(it => it.type === 'page' && !it.external)
      .filter(it => it && it.data?.rss !== false && !it.external)
      .toSorted((a,b) => (b?.data?.date ?? 0) - (a?.data?.date ?? 0))
    const compilePage =async (p: Page) => {
      return await compileMarkdown({cache: cacheFn}, {
        _meta: {
          filePath: '',
          fileName: '',
          directory: '',
          path: '',
          extension: 'md'
        },
        content: p!.data!.content
      })
    }
    const res =rssPages.map(async (p) => ({
      id: p!.data!.bvid,
      date: new Date(p!.data!.date! * 1000),
      title: p!.data!.title,
      description: p!.data!.description ?? "",
      link: `${config.baseUrl}${p!.url}`,
      content: await compilePage(p),
    }))
    return Promise.all(res)
  }

  async buildRSS(feed?: Feed) {
    let f = feed ?? this.generateFeed()
    const rssItems = await this.collectRssItem()
    rssItems.forEach(it => f.addItem(it))
    return f
  }
}

// @ts-ignore
const cacheFn = async (i, compute) => compute(i)
