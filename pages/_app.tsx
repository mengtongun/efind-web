import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import { ICategory } from 'interfaces';
import MainLayout from 'layout/MainLayout';
import { useCategories } from 'libs/hooks';

import { createContext } from 'react';
import '../styles/globals.css';
export const CategoriesContext = createContext<ICategory[]>(null);

const MyApp = ({ Component, pageProps }) => {
  const { categories } = useCategories();
  return (
    <NextUIProvider>
      <CategoriesContext.Provider value={categories && categories}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CategoriesContext.Provider>
    </NextUIProvider>
  );
};

export default MyApp;
