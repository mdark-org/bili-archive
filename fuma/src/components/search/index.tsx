'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';

const client = new OramaClient({
  endpoint: process.env.NEXT_PUBLIC_ORAMA_ENDPOINT as string,
  api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY as string,
});

export default function OramaCloudSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} index="crawler" client={client} />;
}