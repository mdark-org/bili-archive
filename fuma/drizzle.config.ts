import { defineConfig } from "drizzle-kit";
import 'dotenv/config'
const DATABASE_URL= process.env.DATABASE_URL!
const pgConfig = defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL
  }
})

export default pgConfig