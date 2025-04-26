import type { MetadataRoute } from 'next'
import { source } from '@/lib/source';
import {config} from "../../config";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, config.baseUrl).toString();
  return [
    {
      url: url('/'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...(await source.getContentPages()).map((page) => {
      // const { lastModified } = await page.data.load();
      return {
        url: url(page.url),
        // lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: 'weekly',
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    }),
  ];
}