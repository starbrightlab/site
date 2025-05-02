import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Starbright Lab - Designing Tomorrow, Today"
        />
        <meta name="theme-color" content="#FFF7E6" />
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags can be added here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
