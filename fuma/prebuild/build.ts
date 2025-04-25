import {Datasource, Folder, Node, Page, Root} from "../src/lib/source/shared";
import {UnStorageSourceBuilder} from "./unstorage-builder";
import serialize from "serialize-javascript";
import * as fs from "node:fs";

export const build = async (datasources: Datasource[]) => {
  const sources = []
  for ( const datasource of datasources) {
    const source = await new UnStorageSourceBuilder(datasource).build()
    sources.push(source)
  }
  const pageMaps = serialize(sources, { space: 2, unsafe: true })
  fs.mkdirSync('.source/generated', { recursive: true })
  const sourceFile = fs.openSync('.source/generated/sources.js', 'w+')
  const indexFile = fs.openSync('.source/generated/index.js', 'w+')
  const dtsFile = fs.openSync('.source/generated/index.d.ts', 'w+')
  fs.writeSync(indexFile, `
import sources from "./sources.js";
export { sources };
`)
  fs.writeSync(dtsFile, `
type Page = {
  url: string,
  name: string,
  [x: string]: any
}
type Folder = {
  url: string,
  name: string,
  root: boolean,
  [x: string]: any,
  children: Tree[]
}
type Tree = (Folder | Page) & {
  children: Tree[]
}

type Source = {
  pageMap: Map<string, Page>,
  pageTree: Tree
}
export declare const sources: Source[];
`)
  fs.writeSync(sourceFile, `export default ${pageMaps}`)
}