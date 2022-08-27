import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

declare type CustomNextSeoPropsType = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
};

const CustomNextSeo = (props: CustomNextSeoPropsType) => {
  const { title, description, image, url } = props;
  const router = useRouter();
  return (
    <NextSeo
      noindex={true}
      defaultTitle="eFind"
      description={
        description ||
        'eFind is a platform that helps you find the best stores in your area. You can find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories.'
      }
      openGraph={{
        type: 'website',
        url: url || window.location.href || router.asPath || router.pathname,
        title: title,
        description: description || 'eFind | Find your trusted online store',
        images: [
          {
            url: image || 'https://teiiihfrnoybdttheiwg.supabase.co/storage/v1/object/public/logos/efind_official.png',
            width: 800,
            height: 600,
            alt: 'eFind Web Logo',
          },
          {
            url: image || 'https://teiiihfrnoybdttheiwg.supabase.co/storage/v1/object/public/logos/efind_logo.png',
            width: 800,
            height: 600,
            alt: 'eFind Admin Logo',
          },
        ],
      }}
    />
  );
};

export default CustomNextSeo;
