import type { APIRoute } from 'astro';
import { createAstroTRPCApiHandler } from '../../../lib/client';
import { appRouter } from '../../../lib/client/appRouter';

// Return 'all' as an Astro api route
export const all = createAstroTRPCApiHandler({
  router: appRouter,
  ctx: async () => {},
});
