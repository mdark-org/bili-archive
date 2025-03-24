import {generateRssFeed, tree} from "../rss";

export async function GET(request: Request, {
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const category = decodeURIComponent((await params).category);
  const feed = generateRssFeed(category);
  const root = tree
  if(!root) {
    return new Response('404 not found', {
      headers: { 'content-type': 'text/plain' },
      status: 404
    })
  }
  // @ts-ignore
  collectRSSPages(root, feed)
  return new Response(feed.rss2(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
