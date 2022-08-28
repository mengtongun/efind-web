import { NextSeo } from 'next-seo';
import React from 'react';

declare type CustomNextSeoPropsType = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
};
const getHostName = () => {
  if (typeof window !== 'undefined') {
    const { hostname } = window.location;
    return hostname;
  }
  return '';
};

const CustomNextSeo = (props: CustomNextSeoPropsType) => {
  const { title, description, image, url } = props;
  return (
    <NextSeo
      robotsProps={{
        noarchive: false,
        nosnippet: false,
        noimageindex: false,
        notranslate: false,
      }}
      additionalMetaTags={[
        {
          name: 'google-site-verification',
          content: '0sNtrqZtgyEfcFkq9ewo8cJZIHteLmF4cfxYVRh0ZSM',
        },
      ]}
      // TODO: Add manifest.json
      title={title + ' | eFind'}
      description={
        description ||
        'eFind is a platform that helps you find the best stores in your area. You can find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories. You can also find the best stores in your area by searching for them or by browsing through the categories.'
      }
      openGraph={{
        type: 'website',
        url: getHostName() || 'https://efind.vercel.app',
        title: title + ' | eFind',
        description: description || 'eFind | Find trusted online store',
        site_name: 'eFind | Find trusted online store',
        locale: 'en_US',
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
