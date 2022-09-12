import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { Provider } from 'urql';
import { client } from '@root/src/lib/queryClient';
import { DefaultSeo } from 'next-seo';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <DefaultSeo title='hello' />
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
