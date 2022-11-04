import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './appRouter';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // todo: make this url dynamic for local/dev/prod
      url:
        process.env.NODE_ENV === 'production'
          ? import.meta.env.TRPC_ENDPOINT_URL
          : `http://127.0.0.1:3000/api/trpc`,
    }),
  ],
});
