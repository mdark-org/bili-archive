
import { updateSearchIndexes } from './sync-orama-search-index.mjs';

async function main() {
  await Promise.all([updateSearchIndexes()]);
}

await main().catch((e) => {
  console.error('Failed to run post build script', e);
});