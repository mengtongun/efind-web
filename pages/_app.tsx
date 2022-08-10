import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import AuthLayout from 'layout/AuthLayout';
import MainLayout from 'layout/MainLayout';
import { useCategory } from 'libs/hooks';

import { useRouter } from 'next/router';
import { createContext } from 'react';
import '../styles/globals.css';
export const CategoryContext = createContext(null);

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { category } = useCategory();
  return (
    <NextUIProvider>
      <CategoryContext.Provider value={category && category}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CategoryContext.Provider>
    </NextUIProvider>
  );
};

export default MyApp;
