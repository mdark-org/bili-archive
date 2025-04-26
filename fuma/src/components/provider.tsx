'use client';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import type {SharedProps} from "fumadocs-ui/components/dialog/search";
import OramaSearchDialog from "fumadocs-ui/components/dialog/search-orama";
import {OramaClient} from "@oramacloud/client";

const client = new OramaClient({
  endpoint: process.env.NEXT_PUBLIC_ORAMA_ENDPOINT as string,
  api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY as string,
});

const tags = [
  {
    name: '参考信息',
    value: 'refnews',
  },
  {
    name: 'Koala聊开源',
    value: 'koala-oss',
  }
]

const Orama = (props: SharedProps) => {
  return  <OramaSearchDialog client={client} tags={tags} defaultTag={'refnews'} {...props} />
}

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog: Orama,
      }}
    >
      {children}
    </RootProvider>
  );
}