import {sources} from "@doc-source";
import {Root} from "@/lib/source/shared";
import {DataSource} from "@/lib/source/datasource";
import {icons} from "lucide-react";
import {createElement} from "react";


const icon = (icon: any) => {
  if (!icon) return
  if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  return createElement('img', {src: icon, className: 'w-5 h-5'})
}

export const buildSource = () => {
  const base = { name: 'root', children: [] as Root[] }
  // @ts-ignore
  const datasources = sources.map(it => new DataSource(it.pageTree, it.pageMap))
  datasources.forEach(it => {
    it.pageTree.icon = icon(it.pageTree.icon)
    base.children.push(it.pageTree)
  })
  return {
    tree: base,
    getPageBySlug: async (slug: string[] | undefined) => {
      if(!slug || slug.length == 0) {
        return (await Promise.all(datasources.map(it => it.getPages()))).flat()?.[0]
      }
      const pages = await Promise.all(datasources.map(it => it.getPageBySlug(slug)))
      const page = pages.find(it => it !== null)
      return page
    },
    getPages: async () => {
      return datasources.flatMap(it => it.getPages())
    },
    generateParams: async () => {
      const pages = await Promise.all(datasources.flatMap(it => it.generateStaticParams()))
      const res = pages.flatMap(it => it)
      return res
    }
  }
}
export const source = buildSource()