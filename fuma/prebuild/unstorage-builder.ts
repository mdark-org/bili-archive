import {Datasource, Folder, metaSchema, Page, Root, Transformers} from "../src/lib/source/shared";
import {createStorage, Storage} from "unstorage";
import githubDriver from "unstorage/drivers/github";
import micromatch from "micromatch";
import matter from "gray-matter";


type VFilePath = {
  path: string
  sourcePath: string,
  url: string
  filename: string
  ext: string
  fullName: string
  key: string
}

export class UnStorageSourceBuilder {
  private storage: Storage
  private root: Root
  private basePath: string
  private transformers?: Transformers
  private source : Omit<Datasource, 'transformer'>
  constructor(source: Datasource) {
    let { transformers, ...restSource} = source
    this.source = restSource
    this.transformers = transformers
    this.storage = createStorage({
      driver: githubDriver({
        repo: this.source.config.repo,
        branch: this.source.config.branch,
        dir: this.source.config.dir,
        token: this.source.config.token
      }),
    });
    let node: Root = {
      title: source.name,
      description: source.description,
      icon: source.icon,
      url: source.mountedPath,
      name: source.name,
      type: 'folder' as const,
      root: true,
      depth: source.mountedPath.split('/').length - 1,
      children: [],
      $source: restSource,
    }
    this.root = this.applyFolderTransformer(node, 'before-build-tree')
    this.basePath = source.mountedPath
  }


  private unStorageKeyToPath(key: string) {
    const segments = key.split(':')
    const filename = segments.pop()
    const path = [this.basePath, ...segments].join('/')
    const lastidx = filename?.lastIndexOf('.')
    const ext = lastidx ? filename?.slice(lastidx) : ''
    const filenameWithoutExt = lastidx ? filename?.slice(0, lastidx) : filename
    return {
      filename: filenameWithoutExt,
      fullName: filename,
      ext,
      path,
      sourcePath: segments.join('/'),
      url: path.concat(`/${filenameWithoutExt}`),
      key
    }
  }

  async getFiles() {
    let keys = await this.storage.getKeys('')
    const includes = (this.source.config.includes) as string[]
    if(includes) keys = micromatch(keys, includes)
    const vFilePaths = keys.map(key => this.unStorageKeyToPath(key))
    const paths = keys.flatMap(it => it.split(':').slice(0, -1)
      .reduce((acc, cur) => ({pre: acc.pre + '/' + cur, arr: [...acc.arr, acc.pre + '/' + cur]}), {pre: '', arr: [] as string[]}).arr
    )
      .map(it => this.basePath + it)
    return {
      filePaths: vFilePaths,
      folderPaths: paths,
    }
  }

  private async getVFile(vfile: VFilePath) {
    const item = await this.storage.getItem(vfile.key)
    return item as string
  }

  applyFolderTransformer<T extends Folder | Root>(node: T, type: 'before-build-tree' | 'after-build-tree') {
    if(node.type != 'folder') throw new Error("Node type should be folder")
    let transformers = this.transformers?.folder ?? []
    if(node.root) {
      transformers = this.transformers?.root ?? []
    }
    let cur = node
    for (const transform of transformers) {
      if(type == 'after-build-tree') {
        cur = transform.afterBuildTree?.(cur) ?? cur
      }
      if(type === 'before-build-tree') {
        cur = transform.beforeBuildTree?.(cur) ?? cur
      }
    }
    return cur
  }
  applyPageTransformer<T extends Page>(node: T) : T {
    const transformers = this.transformers?.page ?? []
    let cur = node
    for (const transform of transformers) {
      cur = transform?.(cur) ?? cur
    }
    return cur
  }

  async buildFolders() {
    const {folderPaths} = await this.getFiles()
    const folderMap = new Map<string,Folder>()
    for (const path of folderPaths) {
      const folder = {
        url: path,
        name: path.split('/').pop()!,
        title: path.split('/').pop()!,
        children: [],
        type: 'folder' as const,
        depth: path.split('/').length - 1,
        $source: this.source,
      }
      folderMap.set(path, this.applyFolderTransformer(folder, 'before-build-tree'))
    }
    return folderMap
  }

  async buildFolderTree(folderMap: Map<string, Folder>) {
    let folders = Array.from(folderMap.values())
    folders.sort((a,b) => b.depth - a.depth)
    while(folders.length > 0) {
      let folder = folders.pop()!
      const children = folders
        .filter(it => it.depth === folder.depth + 1)
        .filter(it => it.url.startsWith(folder.url))
      folder.children = [...folder.children, ...children]
    }
  }

  async fulfillFolders(folderMap: Map<string, Folder>) {
    const pageMap = new Map<string, Page>
    const {filePaths} = await this.getFiles()
    for (const vFilePath of filePaths) {
      console.log("loading", vFilePath)
      const folder = folderMap.get(vFilePath.path)!
      let page = await this.VFileToPage(<VFilePath>vFilePath, this.root)
      if(!page) {
        console.log(`key:${vFilePath.key} has been skipped`)
        continue
      }
      page = this.applyPageTransformer(page)
      const {content, ...rest} = page.data!
      let pageWithoutContent = { ...page, data: rest }
      // @ts-ignore
      folder.children.push(pageWithoutContent)
      pageMap.set(page.url, page)
    }
    return pageMap
  }


  private async VFileToPage(vFileMeta: VFilePath, root: Root): Promise<Page | null> {
    const item = await this.getVFile(vFileMeta)
    const frontmatter = matter(item as string)
    const parsed = metaSchema.safeParse(frontmatter.data)
    if(!parsed.success) return null
    const {data} = parsed
    const [owner, repo] = this.source.config.repo.split('/')
    return {
      url: vFileMeta.url,
      name: data.title ?? vFileMeta.filename!,
      title: data.title ?? vFileMeta.filename!,
      type: 'page' as const,
      filename: vFileMeta.filename,
      ext: vFileMeta.ext,
      $source: this.source,
      data: {
        ...data,
        content: frontmatter.content
      },
      github: {
        owner: owner,
        repo: repo,
        sha: this.source.config.branch,
        path: this.source.config.dir.concat(`/${vFileMeta.sourcePath}/${vFileMeta.fullName}`)
      }
    }
  }

  async build() {
    console.log("start build folder")
    const folderMap = await this.buildFolders()
    console.log("start build folder tree")
    // add root to folderMap
    folderMap.set(this.root.url, this.root as Folder)
    await this.buildFolderTree(folderMap)
    console.log("start fulfill folder tree")
    const pageMap = await this.fulfillFolders(folderMap)
    folderMap.values().forEach(it => {
      this.applyFolderTransformer(it, 'after-build-tree')
    })
    return {
      pageTree: this.root,
      pageMap
    }
  }
}

