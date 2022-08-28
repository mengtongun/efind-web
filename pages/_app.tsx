import { NextUIProvider } from '@nextui-org/react';
import 'antd/dist/antd.css';
import { ICategory } from 'interfaces';
import MainLayout from 'layout/MainLayout';
import { useCategories } from 'libs/hooks';

import { createContext, useEffect } from 'react';
import '../styles/globals.css';
export const CategoriesContext = createContext<ICategory[]>(null);
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { CustomNextSeo } from '@/components';
import { useRouter } from 'next/router';
import { GTM_ID, PageView } from 'libs/gtm';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  const { categories } = useCategories();
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', PageView);
    return () => {
      router.events.off('routeChangeComplete', PageView);
    };
  }, [router.events]);
  return (
    <UserProvider supabaseClient={supabaseClient}>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
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
