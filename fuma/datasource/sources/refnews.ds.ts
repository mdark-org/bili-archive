import {addRSSPage, indexFolderTransformer} from "../transformer";
import {Context, DatasourceCreator} from "../shared";

const refnews : DatasourceCreator<'github'>= (ctx: Context) => ({
  id: 'btnews.refnews',
  name: '参考信息',
  description: "资讯连连看，消灭信息差",
  mountedPath: '/refnews',
  category: [],
  icon: "/image/refnews.png",
  provider: {
    type: 'unstorage',
    driver: 'github' as const,
    options: { repo: "mdark-org/btnews", branch: "master", dir: "/docs/btnews/refnews", token: ctx.env.GITHUB_TOKEN },
    includes: ['*.md', '*.mdx'],
  },
  github: { repo: "mdark-org/btnews", branch: "master", dir: "/docs/btnews/refnews" },
  transformers: {
    root: [
      addRSSPage(`${ctx.env.BASE_URL}/rss/refnews`),
      indexFolderTransformer
    ],
    folder:[ indexFolderTransformer ]
  }
})

export default refnews