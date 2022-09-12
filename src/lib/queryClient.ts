import { createClient } from 'urql';

export const client = createClient({
  url: `${process.env.BACKEND_URL}/graphql`,
});
