import btnewsDs from "./sources/btnews.ds";
import koalaOssDs from "./sources/koala-oss.ds";
import refnewsDs from "./sources/refnews.ds";
import opinionDs from "./sources/opinion.ds";
import slangDs from "./sources/slang.ds";
import type { Datasource } from "@repo/datasource/shared";
import jhonKhanDs from "./sources/jhon-khan.ds";

const ctx = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    BASE_URL: process.env.BASE_URL
  }
}

export const datasources = [
  refnewsDs(ctx),
  btnewsDs(ctx),
  opinionDs(ctx),
  slangDs(ctx),
  koalaOssDs(ctx),
  jhonKhanDs(ctx)
] as Datasource[]
