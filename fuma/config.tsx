import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { FeedOptions } from 'feed'
import { Rss } from 'lucide-react'

type Config = {
  title: string,
  description: string,
  enableComment: boolean
  github?: {
    owner: string
    repo: string
    // default true
    editable?: boolean
    sha: string
  }
  feed?: Partial<FeedOptions>,
  docBasePath: string
  baseUrl: string
  fuma: {
    baseLayout: BaseLayoutProps
  }
}
const baseUrl = process.env.BASE_URL as string

export const config: Config = {
  enableComment: true,
  title: 'Bili Archive',
  description: 'Bili Archive',
  docBasePath: 'docs',
  github: { owner: 'ktkongtong', repo: 'bili-archive', sha: 'main' },
  baseUrl: baseUrl,
  feed: {
    title: 'Bili Archive',
    description: 'Bili Archive',
    id: baseUrl,
    link: baseUrl,
  } as FeedOptions,
  fuma: {
    baseLayout: {
      nav: {
        title: <>Auto2Doc</>,
      },
      links: [
        {
          type: 'icon',
          url: `${baseUrl}/rss.xml`,
          icon: <Rss />,
          label: 'RSS'
        }
      ]
    } as BaseLayoutProps,
  },
}