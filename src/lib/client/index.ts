import { initTRPC } from '@trpc/server';
import type { Context } from './context';

export { trpc as client } from './createClient';
export { createAstroTRPCApiHandler } from './apiHandler';

const t = initTRPC.context<Context>().create();

// Unprotected procedure
export const publicProcedure = t.procedure;
export type PublicProcedure = typeof publicProcedure;

export const router = t.router;
