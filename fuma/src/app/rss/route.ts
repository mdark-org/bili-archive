import { Feed } from "feed";
import { source } from '@/lib/source'
import { config } from '../../../config'
function generateRssFeed(category: string) {
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



const tree = source.getPageTree()

type Node = (typeof tree.children)[number]
type Item = Node & { type: 'page' }
function dfs(pages: Item[], node: Node) {
  switch (node.type) {
    case 'page': pages.push(node); break
    case 'folder':node.children.forEach(it => dfs(pages, it)); break
    case 'separator': break
  }
}

export async function GET(request: Request) {
  // const category = (await params).category;
  const feed = generateRssFeed('');
  const root = tree
  const pages = [] as Item[]
  if(!root) {
    return new Response(feed.rss2(), {
      headers: {
        'content-type': 'application/xml',
      },
    })
  }
  root.children.forEach(it => dfs(pages, it));
  const ps = pages.map(it => source.getPage(it.url.replace('/', '').split('/')))
    .toSorted((a,b) => (a?.data?.date ?? 0) - (b?.data?.date ?? 0))
  ps.forEach(p => {
    feed.addItem({
      id: p!.data.bvid,
      date: new Date(p!.data.date * 1000),
      title: p!.data.title,
      description: p!.data.description ?? "",
      link: `${config.baseUrl}${p!.url}`,
      content: p!.data.content,
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
