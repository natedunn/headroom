import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <title>Hello</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
