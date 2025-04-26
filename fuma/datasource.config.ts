import {Datasource, Folder, Root} from "./src/lib/source/shared";

const indexFolderTransformer = (folder: Folder) => {
  const regex = /\d{4}_\d{4}/
  if(regex.test(folder.name)) {
    const [start, end] = folder.name.split('_')
    folder.name = `第 ${parseInt(start)} 期 ～ 第 ${parseInt(end)} 期`
  }
}


const dateFolderTransformer = (folder: Folder) => {
  const regex = /20\d{2}/
  if(regex.test(folder.name)) {
    folder.name = `${folder.name} 年`
    return
  }
  const seasonRegex = /\d{2}-\d{2}/
  if(seasonRegex.test(folder.name)) {
    const [start, end] = folder.name.split('-')
    folder.name = ` ${parseInt(start)} 月 ～ ${parseInt(end)} 月`
    return
  }
}

const datasources: Datasource[] = [
  {
    id: 'btnews.refnews',
    mountedPath: '/refnews',
    category: [],
    name: '参考信息',
    icon: "/image/refnews.png",
    description: "资讯连连看，消灭信息差",
    provider: 'unstorage',
    config: {
      includes: ['*.md', '*.mdx'],
      driver: 'github',
      repo: "ktkongtong/btnews",
      branch: "master",
      dir: "/docs/btnews/refnews",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: (root: Root) => {
        if(root.root) {
          root.children.push({
            type: 'page',
            title: 'RSS',
            name: 'RSS',
            external: true,
            url: 'https://bili-archive.vercel.app/rss/refnews',
            children: []
          })
        }
      },
      folder: indexFolderTransformer
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
      repo: "ktkongtong/bili-archive",
      branch: "main",
      dir: "/docs/Koala聊开源",
      token: process.env.GITHUB_TOKEN,
    },
    transformers: {
      root: (root: Root) => {
        if(root.root) {
          root.children.push({
            type: 'page',
            title: 'RSS',
            name: 'RSS',
            external: true,
            url: 'https://bili-archive.vercel.app/rss/koala-oss',
            children: []
          })
        }
      },
      folder: dateFolderTransformer
    }
  }
]
export default datasources