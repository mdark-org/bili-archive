import { db } from '.'
import * as table from './schema'
import { eq } from 'drizzle-orm'
export const cache = {
  get: async <T>(key: string) => {
    const [value] = await db.select().from(table.cache).where(eq(table.cache.key, key))
    return (value as T) || null
  },
  set: async (key: string, value: any) => {
    const [cache] = await db
      .insert(table.cache)
      .values({ key, value })
      .onConflictDoUpdate({
        target: [table.cache.key],
        set: {
          value,
          insertedAt: new Date(),
        },
      })
      .returning()
    return cache
  },
  remove: async (key: string) => {
    const [cache] = await db.delete(table.cache).where(eq(table.cache.key, key)).returning()
    return cache
  },

}