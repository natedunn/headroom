import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // TODO: add fallback URI if no adapter is being used
  uri: `${process.env.BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});
