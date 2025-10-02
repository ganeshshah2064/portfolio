/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ganeshsahu.com.np',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://ganeshsahu.com.np/sitemap.xml',
    ],
  },
  // Add more configuration options here if needed
};
