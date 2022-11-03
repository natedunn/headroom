import { initTRPC } from '@trpc/server';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { createAstroTRPCApiHandler } from '../../../lib/trpc';
import { createTRPCProxyClient } from '@trpc/client';

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

export const all = createAstroTRPCApiHandler({
  router: appRouter,
  ctx: async () => {},
});

export async function getStaticPaths() {
  return Object.keys(appRouter).map((key) => {
    return {
      params: {
        trpc: key,
      },
    };
  });
}
