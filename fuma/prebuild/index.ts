import {build} from "./build";
import datasources from "../config/datasource";

export default async function buildContent() {
  await build(datasources)
}

 buildContent()