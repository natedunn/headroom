import type { APIRoute } from 'astro';
import { initTRPC } from '@trpc/server';
import { createAstroTRPCApiHandler } from '../../../lib/trpc';

const t = initTRPC.create();

const appRouter = t.router({
  test: t.procedure.query(() => {
    return {
      hello: 'world',
    };
  }),
  hello: t.procedure.query(() => {
    return `hello right back to you!`;
  }),
});

export type AppRouter = typeof appRouter;

// Return 'all' as an Astro api route
export const all: APIRoute = createAstroTRPCApiHandler({
  router: appRouter,
  ctx: async () => {},
});
