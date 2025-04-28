import {Datasource, Folder, Root} from "../src/lib/source/shared";
import {addRSSPage, dateFolderTransformer, indexFolderTransformer} from "./transformer";

const baseUrl = process.env.BASE_URL as string

export const searchTags = [
  { name: '参考信息', value: 'refnews' },
  { name: '睡前消息', value: 'btnews' },
  { name: '高见', value: 'opinion' },
  { name: '讲点黑话', value: 'slang' },
  { name: 'Koala聊开源', value: 'koala-oss' }
]

export const defaultSearchTag = 'refnews'

const datasources: Datasource[] = [
  {
    id: 'btnews.refnews',
    name: '参考信息',
    description: "资讯连连看，消灭信息差",
    mountedPath: '/refnews',
    category: [],
    icon: "/image/refnews.png",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "mdark-org/btnews",
      branch: "master",
      dir: "/docs/btnews/refnews",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: [
        addRSSPage(`${baseUrl}/rss/refnews`),
        indexFolderTransformer
      ],
      folder:[ indexFolderTransformer ]
    }
  },
  {
    id: 'btnews.btnews',
    name: '睡前消息',
    description: "热河省蛮子，刘亦菲粉丝",
    mountedPath: '/btnews',
    category: [],
    icon: "/image/btnews.png",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "mdark-org/btnews",
      branch: "master",
      dir: "/docs/btnews/btnews",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: [
        addRSSPage(`${baseUrl}/rss/btnews`),
        indexFolderTransformer
      ],
      folder:[ indexFolderTransformer ]
    }
  },
  {
    id: 'btnews.opinion',
    name: '高见',
    description: "热河省蛮子，刘亦菲粉丝",
    mountedPath: '/opinion',
    category: [],
    icon: "/image/opinion.png",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "mdark-org/btnews",
      branch: "master",
      dir: "/docs/btnews/opinion",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: [
        addRSSPage(`${baseUrl}/rss/opinion`),
        indexFolderTransformer
      ],
      folder:[ indexFolderTransformer ]
    }
  },
  {
    id: 'btnews.slang',
    name: '讲点黑话',
    description: "讲点黑话",
    mountedPath: '/slang',
    category: [],
    icon: "/image/slang.png",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "mdark-org/btnews",
      branch: "master",
      dir: "/docs/btnews/slang",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: [
        addRSSPage(`${baseUrl}/rss/slang`),
        indexFolderTransformer
      ],
      folder:[ indexFolderTransformer ]
    }
  },
  {
    id: 'archive.koala-oss',
    mountedPath: '/koala-oss',
    category: [],
    name: 'Koala聊开源',
    icon: "/image/koala.png",
    description: "了解科技资讯、把握行业脉搏。每周快速浏览 Hacker News 精选。",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "mdark-org/bili-koala-oss",
      branch: "main",
      dir: "/docs/Koala聊开源",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: [
        addRSSPage(`${baseUrl}/rss/koala-oss`),
        dateFolderTransformer,
      ],
      folder: [
        dateFolderTransformer,
      ]
    }
  }
]


export default datasources