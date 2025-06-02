import type { SyncOptions, OramaDocument } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';
import { uploadFileToS3WithAws4Fetch } from './upload';

// failed if body too large.

export async function updateSearchIndexes(): Promise<void> {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;

  if (!apiKey) {
    console.log('no api key for Orama found, skipping');
    return;
  }

  const content = await fs.readFile('.next/server/app/static.json.body');
  const records = JSON.parse(content.toString()) as OramaDocument[];
  const manager = new CloudManager({ api_key: apiKey });

  await sync(manager, {
    index: process.env.ORAMA_INDEX_ID!,
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}

async function sync(
  cloudManager: CloudManager,
  options: SyncOptions,
): Promise<void> {
  const { autoDeploy = true } = options;
  const index = cloudManager.index(options.index);
  console.log("updating index")
  await index.snapshot(options.documents);
  console.log("deploying index")
  if (autoDeploy) await index.deploy();
}

export async function updateSearchIndexFile() {
  const localFilePath = '.next/server/app/static.json.body'; 
  const s3TargetUrl = process.env.S3_FILE_URL;
  if(!s3TargetUrl) {
    console.log('no s3 url found for orama index file, skipping');
    return
  }
  await uploadFileToS3WithAws4Fetch(localFilePath, s3TargetUrl);
}

