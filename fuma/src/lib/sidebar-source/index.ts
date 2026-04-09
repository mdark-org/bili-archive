import { Root } from "@repo/datasource/shared";
import { icons } from "lucide-react";
import { createElement } from "react";
import { sidebarDatasourceSchema } from "@/lib/sidebar-source/schema";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import * as path from "node:path";

const icon = (icon: any) => {
  if (!icon) return;
  if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  return createElement("img", { src: icon, className: "w-5 h-5" });
};

type SidebarDatasource = {
  pageTree: Root;
  datasourceInfo: {
    id: string;
    [x: string]: any;
  };
};

const sidebarGeneratedDir = path.join(process.cwd(), ".source/generated/sidebar");
const sourceEntries = (() => {
  if (!existsSync(sidebarGeneratedDir)) {
    return [];
  }
  return readdirSync(sidebarGeneratedDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(sidebarGeneratedDir, file);
      const content = readFileSync(filePath, "utf8");
      return JSON.parse(content);
    });
})();

const datasources =
  sourceEntries
    .map((entry) => sidebarDatasourceSchema.parse(entry))
    .map((it) => ({
      ...it,
      pageTree: {
        ...it.pageTree,
        icon: icon(it.pageTree.icon),
      },
    })) as SidebarDatasource[];

const tree = {
  name: "root",
  children: datasources.map((it) => it.pageTree),
} satisfies { name: string; children: Root[] };

const shrinkRoot = (root: Root): Root => ({
  ...root,
  children: [],
});

export const sidebarSource = {
  tree,
  getSidebarTreeBySlug(slug?: string[]) {
    if (!slug || slug.length === 0) return tree;

    const category = slug[0];
    const activeUrl = `/docs/${category}`;
    const active = datasources.find((it) => it.pageTree.url === activeUrl);
    if (!active) return tree;

    return {
      ...tree,
      children: datasources.map((it) =>
        it.datasourceInfo.id === active.datasourceInfo.id ? it.pageTree : shrinkRoot(it.pageTree),
      ),
    };
  },
};
