export type Context = {
  env: {
    BASE_URL?: string
    GITHUB_TOKEN?: string
  }
}

export type { Root, Folder, DatasourceCreator} from "@repo/datasource/shared";