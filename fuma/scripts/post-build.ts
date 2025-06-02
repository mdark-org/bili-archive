
import { updateSearchIndexes } from './sync-orama-search-index';

async function main() {
  await Promise.all([updateSearchIndexes()]);
}

main().catch((e) => {
  console.error('Failed to run post build script', e);
});