import {z} from "zod";

export const datasourceSchema = z.object({
  pageTree: z.any(),
  pageMap: z
    .preprocess((x) => {
      // @ts-ignore
      const keys = Object.keys(x)
      let ans = new Map<string, any>()
      for (const key of keys) {
        // @ts-ignore
        ans.set(key, x[key]);
      }
      return ans;
    }, z.map(z.string(), z.any()))
    ,
  datasourceInfo: z.any()
})