import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import MainLayout from 'layout/MainLayout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </NextUIProvider>
  );
};

export default MyApp;
