import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createMetaSchema,
  createDocSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";


const docs = defineCollection({
  name: "docs",
  directory: "../docs",
  include: ["**/*.mdx", "**/*.md"],
  schema: (z) => {
    return {
      ...createDocSchema(z),
      date: z.coerce.number(),
      bvid: z.string().optional(),
      rss: z.boolean().optional().default(true),
    }
  },
  transform: transformMDX,
});

const metas = defineCollection({
  name: "meta",
  directory: "../docs",
  include: "**/meta.json",
  parser: "json",
  schema: (z) => {
    return {
      ...createMetaSchema(z),
    }
  },
});

export default defineConfig({
  collections: [docs, metas],
});
