import { createClient, cacheExchange, fetchExchange } from 'urql';
import generatedSchema from '@codegen';

export const client = createClient({
  url: `${process.env.BACKEND_URL}/graphql`,
});

// eslint-disable-next-line
const schema = generatedSchema as any;
cacheExchange(schema);

export const ssgClient = () =>
  createClient({
    url: `${process.env.BACKEND_URL}/graphql`,
    exchanges: [fetchExchange],
  });
