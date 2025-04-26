import {sources} from ".source/generated";
import {Root} from "@/lib/source/shared";
import {DataSource} from "@/lib/source/datasource";
import {icons} from "lucide-react";
import {createElement} from "react";
import {Feed, FeedOptions} from "feed";
import {config} from "../../../config";


const icon = (icon: any) => {
  if (!icon) return
  if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  return createElement('img', {src: icon, className: 'w-5 h-5'})
}

export function generateRssFeed(category: string, feedOption?: Partial<FeedOptions>) {
  const site = config.baseUrl
  const feedOptions = {
    title: config.feed?.title ?? `${config.title} | RSS Feed`,
    description: config.feed?.description ?? `${category} RSS feed powered by Auto2Doc`,
    id: config.feed?.id ??  site,
    link: config.feed?.link ?? site,
    language: config.feed?.language ?? "zh-CN",
    image: config.feed?.image ?? `${site}/logo.png`,
    favicon: config.feed?.favicon ?? `${site}/favicon.ico`,
    copyright: config.feed?.copyright ?? 'Auto2Doc',
    ...feedOption,
  };
  const feed = new Feed(feedOptions);
  return feed;
}

export const buildSource = () => {
  const base = { name: 'root', children: [] as Root[] }
  // @ts-ignore
  const datasources = sources.map(it => new DataSource(it.pageTree, it.pageMap))
  datasources.forEach(it => {
    it.pageTree.icon = icon(it.pageTree.icon)
    base.children.push(it.pageTree)
  })
  return {
    tree: base,
    getPageBySlug: async (slug: string[] | undefined) => {
      if(!slug || slug.length == 0) {
        return (await Promise.all(datasources.map(it => it.getPages()))).flat()?.[0]
      }
      const pages = await Promise.all(datasources.map(it => it.getPageBySlug(slug)))
      const page = pages.find(it => it !== null)
      return page
    },
    getPages: async () => {
      return datasources.flatMap(it => it.getPages())
    },
    generateParams: async () => {
      const pages = await Promise.all(datasources.flatMap(it => it.generateStaticParams()))
      const res = pages.flatMap(it => it)
      return res
    },
    generateRSS: async(category?: string) => {
      if(category) {
        const datasource = datasources.find(it => it.pageTree.url === `/${category}`)
        if(datasource) {
          return datasource.buildRSS(config.baseUrl)
        }
        return null
      }

      const feed = generateRssFeed('')
      const rssItems =await Promise.all(datasources.map(it => it.collectRssItem(config.baseUrl)))
        .then(res => res.flat())
        rssItems.sort((a,b) => dateComparator(a.date,b.date))
      rssItems.forEach(it => feed.addItem(it))
      return feed
    }
  }
}

const dateComparator = (a: Date, b: Date) => {
  return a.getTime() - b.getTime()
}

export const source = buildSource()