import { CssBaseline } from '@nextui-org/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html>
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
