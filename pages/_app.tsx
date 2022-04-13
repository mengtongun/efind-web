import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import AuthLayout from 'layout/AuthLayout';
import MainLayout from 'layout/MainLayout';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <NextUIProvider>
      {['/signin'].includes(router.asPath) ? (
        <AuthLayout>
          <Component {...pageProps} />;
        </AuthLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />;
        </MainLayout>
      )}
    </NextUIProvider>
  );
};

export default MyApp;
