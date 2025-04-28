
import serialize from "serialize-javascript";
import * as fs from "node:fs";
import {Datasource} from "../shared";
import {SourceBuilder} from "./builder";
export const build = async (datasources: Datasource[]) => {
  const sources = []
  const res = await Promise.all(datasources.map(it => new SourceBuilder(it).build()))
  for ( const source of res) {
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