const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'Netlify CMS | Open-Source Content Management System',
    description: 'Open source content management for your Git workflow',
    siteUrl: pkg.homepage,
    menu: {
      docs: [
        {
          name: 'start',
          title: 'Quick Start',
        },
        {
          name: 'guides',
          title: 'Guides',
        },
        {
          name: 'media',
          title: 'Media',
        },
        {
          name: 'reference',
          title: 'Reference',
        },
        {
          name: 'contributing',
          title: 'Contributing',
        },
      ],
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-npm-package-search',
      options: {
        keywords: ['netlify-cms'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // prettier-ignore
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NetlifyCMS',
        short_name: 'NetlifyCMS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'static/img/favicon/icon-512x512.png',
      },
    },
  ],
};
