import {collectRSSPages, generateRssFeed, tree} from "./rss";

export async function GET(request: Request) {
  const feed = generateRssFeed('');
  const root = tree
  if(!root) {
    return new Response('404 not found', {
      headers: { 'content-type': 'text/plain' },
      status: 404
    })
  }
  // @ts-ignore
  await collectRSSPages(root, feed)
  return new Response(feed.rss2(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
