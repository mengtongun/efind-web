/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://efind.vercel.app',
  generateRobotsTxt: true,
};
