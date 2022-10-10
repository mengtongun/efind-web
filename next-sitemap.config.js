/** @type {import('next-sitemap').IConfig} */

const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://efind.vercel.app';

module.exports = {
  siteUrl: DOMAIN_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404'],
      },

      // {
      //   userAgent: 'test-bot',
      //   allow: ['/signin', '/signup'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/signin', '/signup'],
      // },
    ],
    additionalSitemaps: [`${DOMAIN_URL}/sitemap-store.xml`, `${DOMAIN_URL}/sitemap-category.xml`],
  },
};
