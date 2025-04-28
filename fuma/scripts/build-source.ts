import {build} from "@repo/datasource/build";
import datasources from "../datasource";

export default async function buildContent() {
  await build(datasources)
}

buildContent()