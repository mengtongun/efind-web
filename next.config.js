/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  incremental: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    domains: ['tailwindui.com'],
  },
};

module.exports = nextConfig;
