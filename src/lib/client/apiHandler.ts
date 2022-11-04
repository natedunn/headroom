import type { APIRoute, APIContext } from 'astro';
import { AnyRouter, inferRouterContext, Dict, TRPCError } from '@trpc/server';
import { resolveHTTPResponse } from '@trpc/server/http';
import type { HTTPRequest } from '@trpc/server/dist/http/internals/types';

export type CreateContextFn<TRouter extends AnyRouter> = (
  APIContext: APIContext
) => inferRouterContext<TRouter> | Promise<inferRouterContext<TRouter>>;

export function createAstroTRPCApiHandler<TRouter extends AnyRouter>(opts: {
  router: TRouter;
  ctx: CreateContextFn<TRouter>;
}): APIRoute {
  return async (astroApiContext) => {
    if (typeof astroApiContext.params.trpc !== 'string') {
      const error = opts.router.getErrorShape({
        error: new TRPCError({
          message: 'Query "trpc" not found - is the file named `[trpc]`.ts or `[...trpc].ts`?',
          code: 'INTERNAL_SERVER_ERROR',
        }),
        type: 'unknown',
        ctx: undefined,
        path: undefined,
        input: undefined,
      });
      return new Response(
        JSON.stringify({
          id: -1,
          error,
        }),
        {
          status: 500,
        }
      );
    }
    const customRequest = astroApiContext.request as Request & {
      headers: Dict<string | string[]>;
    };
    const customRequestUrl = new URL(customRequest.url);
    const req: HTTPRequest = {
      method: customRequest.method,
      headers: customRequest.headers,
      query: customRequestUrl.searchParams,
      body: await customRequest.text(),
    };

    const httpResponse = await resolveHTTPResponse({
      router: opts.router,
      req,
      path: astroApiContext.params.trpc,
      createContext: async () => opts.ctx?.(astroApiContext),
    });

    const { status, headers, body } = httpResponse as {
      status: number;
      headers: Record<string, string>;
      body: string;
    };
    return new Response(body, { status, headers });
  };
}
