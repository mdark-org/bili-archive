import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import type { FeedOptions } from 'feed'
import { Rss } from 'lucide-react'

type Config = {
  title: string,
  description: string,
  enableComment: boolean
  github?: {
    owner: string
    repo: string
    editable?: boolean
    sha: string
  }
  search: {
    tags: SearchItem[],
    defaultSearchTag?: string | undefined
  },
  feed?: Partial<FeedOptions>,
  baseUrl: string
  fuma: {
    baseLayout: BaseLayoutProps
  }
}

const baseUrl = process.env.BASE_URL as string

type SearchItem = {name: string, value: string}

const searchTags = [
  { name: '参考信息', value: 'refnews' },
  { name: '睡前消息', value: 'btnews' },
  { name: '高见', value: 'opinion' },
  { name: '讲点黑话', value: 'slang' },
  { name: 'Koala聊开源', value: 'koala-oss' }
]

const defaultSearchTag = undefined

export const config: Config = {
  enableComment: true,
  title: 'MDARK',
  description: 'MDARK',
  github: { owner: 'mdark-org', repo: 'bili-archive', sha: 'main' },
  baseUrl: baseUrl,
  search: { tags: searchTags, defaultSearchTag },
  feed: {
    title: 'MDARK',
    description: 'MDARK',
    id: baseUrl,
    link: baseUrl,
  } as FeedOptions,
  fuma: {
    baseLayout: {
      nav: {
        title: <>MDARK</>,
      },
      links: [
        { type: 'icon', url: `${baseUrl}/rss`, icon: <Rss />, label: 'RSS' }
      ]
    } as BaseLayoutProps,
  },
}