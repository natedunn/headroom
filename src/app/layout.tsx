import '../styles/globals.css';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <Head>
        <title>Hello</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
