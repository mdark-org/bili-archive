import {build} from "./build";
import datasources from "../datasource.config";

export default async function buildContent() {
  await build(datasources)
}

 buildContent()