import type { APIRoute } from 'astro';
import { createAstroTRPCApiHandler } from '../../../lib/trpc';
import { appRouter } from '../../../lib/trpc/appRouter';

// Return 'all' as an Astro api route
export const all = createAstroTRPCApiHandler({
  router: appRouter,
  ctx: async () => {},
});
