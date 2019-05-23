/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const fs = require("fs")

module.exports = {
  siteMetadata: {
    siteUrl: 'https://virtuoso.dev',
    title: 'React Virtuoso - an elegant virtual list component',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140068800-1',
      },
    },
  ],
}
