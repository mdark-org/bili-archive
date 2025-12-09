
import { updateSearchIndexFile } from './sync-orama-search-index.ts';
import 'dotenv/config'

async function main() {
  // await Promise.all([updateSearchIndexes()]);
  // await updateSearchIndexFile()
}

main().catch((e) => {
  console.error('Failed to run post build script', e);
});