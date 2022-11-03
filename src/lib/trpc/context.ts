// Note: this file is just a placeholder for now. Do not use.

import type { inferAsyncReturnType } from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
  const session = {
    auth: () => {
      return {
        user: {
          id: '1',
          name: 'test',
        },
      };
    },
  };
  return {
    req,
    session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
