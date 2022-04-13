import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  );
};

export default MyApp;
