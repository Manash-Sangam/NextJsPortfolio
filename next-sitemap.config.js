const config = {
  siteUrl: 'https://manash-sangam.com.np', // Replace with your website URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: 'weekly', // Default change frequency
  priority: 0.7, // Default priority
  exclude: ['/admin/*'], // Exclude admin paths
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/additional-page'),
  ],
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;