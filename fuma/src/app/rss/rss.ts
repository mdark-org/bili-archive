import {config} from "../../../config";
import {Feed} from "feed";
import {source} from "@/lib/source";
import {compileMarkdown} from "@content-collections/markdown";
export function generateRssFeed(category: string) {
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
  };
  const feed = new Feed(feedOptions);
  return feed;
}

export const tree = source.getPageTree()

type Node = (typeof tree.children)[number]
export type Item = Node & { type: 'page' }
export function dfs(pages: Item[], node: Node) {
  switch (node.type) {
    case 'page': pages.push(node); break
    case 'folder':node.children.forEach(it => dfs(pages, it)); break
    case 'separator': break
  }
}

// @ts-ignore
const cacheFn = async (i, compute) => compute(i)

export async function collectRSSPages(root: Node & {type: 'folder'}, feed: Feed) {
  const pages = [] as Item[]
  root.children.forEach(it => dfs(pages, it));
  const ps = pages
    .filter(it => it.type === 'page' && !it.external)
    .map(it => source.getPage(it.url.replace('/', '').split('/')))
    .toSorted((a,b) => (b?.data?.date ?? 0) - (a?.data?.date ?? 0))
    for (const p of ps) {
      const res = await compileMarkdown({cache: cacheFn}, p!.data)
      feed.addItem({
        id: p!.data.bvid,
        date: new Date(p!.data.date * 1000),
        title: p!.data.title,
        description: p!.data.description ?? "",
        link: `${config.baseUrl}${p!.url}`,
        content: res,
      })
    }
}