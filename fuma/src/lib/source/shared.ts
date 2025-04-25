import {z} from "zod";

export const metaSchema = z.object({
  rss: z.coerce.boolean().optional().default(true),
  date: z.coerce.number().optional(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.string().array().optional(),
  tag: z.string().array().optional(),
  bvid: z.string().optional(),
  ytid: z.string().optional(),
  wbid: z.string().optional(),
  xgid: z.string().optional()
})

export const pageSchema = z.object({
  url: z.string(),
  name: z.string(),
  title: z.string(),
  type: z.enum(['page']),
  external: z.coerce.boolean().optional(),
  data: metaSchema.extend({
    content: z.string()
  }).optional(),
  github: z.object({
    owner: z.string(),
    repo: z.string(),
    sha: z.string(),
    path: z.string()
  }).optional(),
  children: z.any().array().optional(),
}).catchall(z.any())

export const schema = z.object({
  url: z.string(),
  name: z.string(),
  title: z.string(),
  type: z.enum(['folder']),
  defaultOpen: z.coerce.boolean().nullish(),
  root: z.coerce.boolean().nullish(),
  description: z.string().optional(),
  icon: z.any().optional(),
  index: pageSchema.optional(),
  depth: z.number(),
  $source: z.any(),
  children: z.any().array(),
})

export type Folder = z.infer<typeof schema>
export type Page = z.infer<typeof pageSchema>
export type Node = (Folder | Page) & {
  children: Node[]
  [x: string]: any
}

export type Root = Node




export type DatasourceProvider = 'unstorage' | 'local' | 'content-collections'

export type Datasource = {
  id: string
  name: string
  mountedPath: string
  category?: string[],
  description: string,
  provider: DatasourceProvider,
  config: any,
  icon?: string,
  transformers?: {
    root?: (node: Node) => Node | void
    folder?: (folder: Folder) => Folder | void
    page?: (page: Page) => Page | void
  }
}
