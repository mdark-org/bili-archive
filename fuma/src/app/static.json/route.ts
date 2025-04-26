import { NextResponse } from 'next/server';
import { source } from '@/lib/source';
import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import { structure } from 'fumadocs-core/mdx-plugins';

export const revalidate = false;

export async function GET(): Promise<Response> {
  const pages = await source.getContentPages();
  const results = await Promise.all(
    pages.map(async (page) => {

      const structuredData = structure(page.data?.content!);
      return {
        id: page.url,
        structured: structuredData,
        tag: page.url.split('/')?.[1],
        url: page.url,
        title: page.data!.title,
        // @ts-ignore
        page_id: page.url,
        description: page.data!.description,
      } satisfies OramaDocument;
    }),
  );

  return NextResponse.json(results);
}