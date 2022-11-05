import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './appRouter';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // todo: make this url dynamic for local/dev/prod
      url: import.meta.env.PROD
        ? `${import.meta.env.PUBLIC_PROD_URL}/api/trpc`
        : `http://127.0.0.1:3000/api/trpc`,
    }),
  ],
});
export const client = trpc;
