import { source } from "@/lib/source";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound, redirect } from 'next/navigation'
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import Video from '@/app/(docs)/[[...slug]]/video'
import { Comments } from '@/comment/comment'
import { config } from '../../../../config'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug?.map(it => decodeURIComponent(it));
  let page = source.getPage(slugs);
  if(slugs == undefined || slugs.length == 0) {
    page = source.getPages()?.[0]
    return redirect(encodeURI(page.url));
  }
  if (!page) notFound();
  const bvid = page.data.bvid
  return (
    <DocsPage
      editOnGithub={(config.github && config.github?.editable != false) ? {
        owner: config.github.owner,
        repo: config.github.repo,
        sha: config.github.sha,
        path: `${config.docBasePath}/${page.file.path}`,
      } : undefined }
      toc={page.data.toc}
      full={page.data.full}
      footer={{
        enabled: true,
        component: <>
          {config.enableComment && <Comments page={page.data.bvid!}/>}
        </>
      }}

    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        { bvid && <Video bvid={bvid} className={"rounded-md m-3"} iframeClassname={"rounded-md"}/> }
        <MDXContent
          code={page.data.body}
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
          }}
        />
      </DocsBody>

    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug?.map(it => decodeURIComponent(it));
  let page = source.getPage(slugs);
  if(slugs == undefined || slugs.length == 0) {
    page = source.getPages()?.[0]
  }
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
