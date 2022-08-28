/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  images: {
    domains: ['tailwindui.com', 'teiiihfrnoybdttheiwg.supabase.co'],
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require('./scripts/generate-sitemap');
  //   }

  //   return config;
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
