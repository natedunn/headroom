import { initTRPC } from '@trpc/server';

export { trpc as client } from './createClient';
export { createAstroTRPCApiHandler } from './apiHandler';

const t = initTRPC.create();

// Unprotected procedure
export const publicProcedure = t.procedure;
export type PublicProcedure = typeof publicProcedure;

export const router = t.router;
