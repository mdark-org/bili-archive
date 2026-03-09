import { z } from "zod";

export const sidebarDatasourceSchema = z.object({
  pageTree: z.any(),
  datasourceInfo: z.any(),
});
