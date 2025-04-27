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
  feed?: Partial<FeedOptions>,
  baseUrl: string
  fuma: {
    baseLayout: BaseLayoutProps
  }
}

const baseUrl = process.env.BASE_URL as string

export const config: Config = {
  enableComment: true,
  title: 'MDARK',
  description: 'MDARK',
  github: { owner: 'mdark-org', repo: 'bili-archive', sha: 'main' },
  baseUrl: baseUrl,
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

export * from './datasource'