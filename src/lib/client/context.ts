// Note: this file is just a placeholder for now. Do not use.

import type { inferAsyncReturnType } from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';
import { urqlClient } from './_plugins/graphql/urqlClient';

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
  return {
    req,
    urql: urqlClient,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
