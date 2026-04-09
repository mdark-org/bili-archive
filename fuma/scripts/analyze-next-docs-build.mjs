#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const cwdArg = args.find((arg) => arg.startsWith("--cwd="))?.split("=")[1];
const topArg = args.find((arg) => arg.startsWith("--top="))?.split("=")[1];
const topN = Number(topArg ?? 30);
const cwd = path.resolve(cwdArg ?? process.cwd());

const docsDir = path.join(cwd, ".next/server/app/docs");
if (!existsSync(docsDir)) {
  console.error(`docs directory not found: ${docsDir}`);
  process.exit(1);
}

const walkFiles = (dir) => {
  const entries = readdirSync(dir);
  const res = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      res.push(...walkFiles(fullPath));
    } else if (stat.isFile()) {
      res.push(fullPath);
    }
  }
  return res;
};

const files = walkFiles(docsDir);

const stats = files.map((filePath) => {
  const content = readFileSync(filePath);
  const size = content.byteLength;
  const rel = path.relative(cwd, filePath).replaceAll("\\", "/");
  const ext = path.extname(filePath) || "(no-ext)";
  const hasGeneratedRef = content.includes(".source/generated");
  return { filePath, rel, size, ext, hasGeneratedRef };
});

const totalBytes = stats.reduce((sum, it) => sum + it.size, 0);
const byExt = new Map();
for (const it of stats) {
  byExt.set(it.ext, (byExt.get(it.ext) ?? 0) + it.size);
}

const sortedExt = [...byExt.entries()].sort((a, b) => b[1] - a[1]);
const topFiles = [...stats].sort((a, b) => b.size - a.size).slice(0, topN);
const refFiles = stats.filter((it) => it.hasGeneratedRef);

console.log(`# Next docs build stats`);
console.log(`cwd: ${cwd}`);
console.log(`files: ${stats.length}`);
console.log(`total_bytes: ${totalBytes}`);
console.log(`total_mb: ${(totalBytes / 1024 / 1024).toFixed(2)}`);
console.log("");

console.log("## By extension");
for (const [ext, bytes] of sortedExt) {
  const pct = totalBytes === 0 ? 0 : (bytes / totalBytes) * 100;
  console.log(`${ext}\t${bytes}\t${pct.toFixed(2)}%`);
}
console.log("");

console.log(`## Top ${topFiles.length} files`);
for (const file of topFiles) {
  const pct = totalBytes === 0 ? 0 : (file.size / totalBytes) * 100;
  console.log(`${file.size}\t${pct.toFixed(2)}%\t${file.rel}`);
}
console.log("");

console.log("## Files containing '.source/generated'");
if (refFiles.length === 0) {
  console.log("(none)");
} else {
  for (const file of refFiles) {
    console.log(`${file.size}\t${file.rel}`);
  }
}
