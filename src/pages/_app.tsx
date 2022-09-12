import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { ApolloProvider } from '@apollo/client';
import { client } from '@lib/apollo-client';
import { DefaultSeo } from 'next-seo';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <DefaultSeo title='hello' />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default MyApp;
