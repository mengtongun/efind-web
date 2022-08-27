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
import { NextSeo } from 'next-seo';

const MyApp = ({ Component, pageProps }) => {
  const { categories } = useCategories();
  const getHostName = () => {
    if (typeof window !== 'undefined') {
      const { hostname } = window.location;
      return hostname;
    }
    return '';
  };
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <NextSeo
        noindex={true}
        defaultTitle="eFind | "
        description="eFind is a platform that helps you find the best stores in your area. You can find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories."
        openGraph={{
          type: 'website',
          url: getHostName() || 'https://efind.vercel.app',
          title: 'Popular',
          description: 'eFind | Find your trusted online store',
          images: [
            {
              url: 'https://teiiihfrnoybdttheiwg.supabase.co/storage/v1/object/public/logos/efind_official.png',
              width: 800,
              height: 600,
              alt: 'eFind Web Logo',
            },
            {
              url: 'https://teiiihfrnoybdttheiwg.supabase.co/storage/v1/object/public/logos/efind_logo.png',
              width: 800,
              height: 600,
              alt: 'eFind Admin Logo',
            },
          ],
        }}
      />
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
