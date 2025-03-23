import { NextComment } from "@fuma-comment/server/next";
import { createDrizzleAdapter } from "@fuma-comment/server/adapters/drizzle";
import { db } from "@/lib/db";
import { comments, rates, roles, user } from "@/lib/db/schema";
import { createBetterAuthAdapter } from "@fuma-comment/server/adapters/better-auth";
import { auth as betterAuth } from "@/lib/auth";

export const auth = createBetterAuthAdapter(betterAuth);

export const storage = createDrizzleAdapter({
  db,
  schemas: { user, comments, rates, roles },
  auth: 'better-auth',
});

export const commentRoute = NextComment({
  auth: auth,
  storage,
});