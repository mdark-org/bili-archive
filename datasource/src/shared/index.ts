import type {BuiltinDriverOptions} from "unstorage";
import { pageSchema } from "./schema";
import {z} from "zod";

export type VFilePath = {
  path: string
  sourcePath: string,
  url: string
  filename: string
  ext: string
  fullName: string
  key: string
}

type DatasourceInternal = {
  id: string
  name: string
  mountedPath: string
  category?: string[],
  description: string,
  github?: { repo: string, branch: string, dir: string }
  config?: any,
  icon?: string,
}

export type DatasourceCreator<Opt extends keyof BuiltinDriverOptions, T extends any[] = any[]> = (...param:T) => Datasource<Opt>

export type Datasource<T extends keyof BuiltinDriverOptions | unknown = unknown> = {
  provider: Provider<T>,
  transformers?: Transformers
} & DatasourceInternal

type CommonOption = {
  includes?: string[],
  excludes?: string[],
}

type Provider<T extends keyof BuiltinDriverOptions | unknown = unknown> = UnStorageProvider<T>  & CommonOption

export type UnStorageProvider<Driver extends keyof BuiltinDriverOptions | unknown = unknown> = {
  type: 'unstorage';
  driver: Driver;
  options: Driver extends keyof BuiltinDriverOptions ? BuiltinDriverOptions[Driver] : unknown
}
type D = K<'github'>
type K<Driver extends keyof BuiltinDriverOptions> = {
  [K in keyof BuiltinDriverOptions[Driver]]: BuiltinDriverOptions[Driver][K];
}




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


export type Node = (Folder | Page) & {
  children: Node[]
  [x: string]: any
}

export type Root = Folder & {
  root: true
}


export type Item = Root | Folder | Page

export * from './schema'