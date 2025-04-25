
import {Folder, Page, Root} from "@/lib/source/shared";


export class DataSource {
  constructor(public pageTree: Root, public pageMap: Map<string, Page>) {
  }

  async getPageBySlug(slugs?: string[] | undefined) {
    const slug = ['', ...(slugs ?? [])].join('/')
    return this.pageMap.get(slug) ?? null
  }

  async getPageByHref(href: string) {
    let url = href.split('#')?.[0]
    return this.pageMap.get(url)
  }
  async generateStaticParams() {
    const slugs = this.pageMap.keys().map(k => {
      if(k.startsWith('/')) {
        return k.split('/').slice(1)
      }
      return k.split('/')
    })

    return Array.from(slugs.map(it => ({
      slugs: it
    })))
  }

  async getPages() {
    return Array.from(this.pageMap.values())
  }

  async buildRSS() {

  }
}

