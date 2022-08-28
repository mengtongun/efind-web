/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://efind.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  exclude: ['/sitemap.xml.v1'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
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
  },
};
