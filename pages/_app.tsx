import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import { ICategory } from 'interfaces';
import MainLayout from 'layout/MainLayout';
import { useCategories } from 'libs/hooks';

import { createContext } from 'react';
import '../styles/globals.css';
export const CategoriesContext = createContext<ICategory[]>(null);
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { CustomNextSeo } from '@/components';

const MyApp = ({ Component, pageProps }) => {
  const { categories } = useCategories();

  return (
    <UserProvider supabaseClient={supabaseClient}>
      <CustomNextSeo title="eFind | Your trusted way to find verified shop" />
      <NextUIProvider>
        <CategoriesContext.Provider value={categories}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CategoriesContext.Provider>
      </NextUIProvider>
    </UserProvider>
  );
};

export default MyApp;
