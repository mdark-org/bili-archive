import { source } from "@/lib/source";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound, redirect } from 'next/navigation'
import defaultMdxComponents from "fumadocs-ui/mdx";
import Video from '@/app/(docs)/[[...slug]]/video'
import { Comments } from '@/comment/comment'
import { config } from '../../../../config'
import { compileMDX } from '@fumadocs/mdx-remote';
export const dynamic = 'force-static'
export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug?.map(it => decodeURIComponent(it));
  let page = await source.getPageBySlug(slugs ?? [])
  if(slugs == undefined || slugs.length == 0) {

    return redirect(encodeURI(page!.url));
  }
  const compiled = await compileMDX({
    source: page!.data!.content,
  });
  const MdxContent = compiled.body;
  if (!page) notFound();
  return (
    <DocsPage
      editOnGithub={page.github}
      toc={compiled.toc}
      footer={{
        enabled: true,
        component: <>
          {config.enableComment && <Comments page={page.data!.bvid!}/>}
        </>
      }}
    >
      <DocsTitle>{page.data!.title}</DocsTitle>
      <DocsDescription>{page.data!.description}</DocsDescription>
      <DocsBody>
        { page.data!.bvid && <Video bvid={page.data!.bvid} className={"rounded-md m-3"} iframeClassname={"rounded-md"}/> }
        <MdxContent
          components={{
            ...defaultMdxComponents,
            // a: createRelativeLink(source, page),
          }}
        />
      </DocsBody>

    </DocsPage>
  );
}

export async function generateStaticParams() {
  const res = await source.generateParams();
  return [...res, {
    slug: []
  }]
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug?.map(it => decodeURIComponent(it));
  let page = await source.getPageBySlug(slugs);
  if(slugs == undefined || slugs.length == 0) {
    // @ts-ignore
    page = (await source.getPages())?.[0]
    console.log('finding page', page)
    return redirect(encodeURI(page!.url));
  }
  if (!page) notFound();

  return {
    title: page.data!.title,
    description: page.data!.description,
  } satisfies Metadata;
}
