import {z, ZodRawShape} from "zod";
import parser from 'any-date-parser'


const _metaSchema = z.object({
  rss: z.coerce.boolean().optional(),
  date: z.coerce.date().optional(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.string().array().optional(),
  bvid: z.string().optional(),
  ytid: z.string().optional(),
  wbid: z.string().optional(),
  xgid: z.string().optional()
})

const metaPreprocess = (x: any) => {
  try {
    if(!Number.isNaN(Number(x.date)) && String(x.date).length === 10) {
      x.date  = parser.fromAny(Number(x.date) * 1000)
    }
    x.date = parser.fromAny(x.date)
  }catch (e) {
    x.date = new Date(0)
  }
  if(x.tag && !x.tags) {
    x.tags = x.tag
  }
  return x
}

export const metaSchema = z.preprocess(metaPreprocess, z.object({
  rss: z.coerce.boolean().optional(),
  date: z.coerce.date().optional(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.string().array().optional(),
  bvid: z.string().optional(),
  ytid: z.string().optional(),
  wbid: z.string().optional(),
  xgid: z.string().optional(),
  content: z.string().optional()
}))


export const pageSchema = z.object({
  url: z.string(),
  name: z.string(),
  title: z.string(),
  type: z.literal('page'),
  external: z.coerce.boolean().optional(),
  data: metaSchema.optional(),
  github: z.object({
    owner: z.string(),
    repo: z.string(),
    sha: z.string(),
    path: z.string()
  }).optional(),
}).catchall(z.any())


export type Page = z.infer<typeof pageSchema>

export type Folder = {
  url: string,
  name: string,
  title: string,
  type: 'folder',
  defaultOpen?: boolean | null,
  root?: boolean | null,
  description?: string,
  icon?: any
  index?: Page
  depth: number,
  $source?: any,
  children: (Folder|Page) []
}


// export const baseFolderSchema: z.ZodType<Folder> = z.object({
//   url: z.string(),
//   name: z.string(),
//   title: z.string(),
//   type: z.literal('folder'),
//   defaultOpen: z.coerce.boolean().nullish(),
//   root: z.coerce.boolean().nullish(),
//   description: z.string().optional(),
//   icon: z.any().optional(),
//   index: pageSchema.optional(),
//   depth: z.number(),
//   $source: z.any().optional(),
//   children: z.any().array()
// })

// const childSchema = z.discriminatedUnion('type', [
//   pageSchema,
//   folderSchema
// ]);


export type Node = (Folder | Page) & {
  children: Node[]
  [x: string]: any
}

export type Root = Folder & {
  root: true
}




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
  transformers?: Transformers
}



type Item = Root | Folder | Page
export type Transformer<P extends Item = Item> =  <T extends P>(node: T) => T | void

export type RootTransformer = Partial<{
  beforeBuildTree: Transformer<Root>,
  afterBuildTree: Transformer<Root>
}>

export type FolderTransformer = Partial<{
  beforeBuildTree: Transformer<Folder>,
  afterBuildTree: Transformer<Folder>
}>

export type Transformers = Partial<{
  root: RootTransformer[]
  folder: FolderTransformer[]
  page: Transformer<Page>[]
}>

