import { commentRoute } from '@/comment'


import type { NextRequest } from 'next/server'

export async function GET(_req: NextRequest, context: { params: Promise<{ comment?: string[] | undefined; }> }) {
  // @ts-ignore
  return commentRoute.GET(_req, context)
}

export async function DELETE(_req: NextRequest, context: { params: Promise<{ comment?: string[] | undefined; }> }) {
  // @ts-ignore
  return commentRoute.DELETE(_req, context)
}

export async function PATCH(_req: NextRequest, context: { params: Promise<{ comment?: string[] | undefined; }> }) {
  // @ts-ignore
  return commentRoute.PATCH(_req, context)
}

export async function POST(_req: NextRequest, context: { params: Promise<{ comment?: string[] | undefined; }> }) {
  // @ts-ignore
  return commentRoute.POST(_req, context)
}
