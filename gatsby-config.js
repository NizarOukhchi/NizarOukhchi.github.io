module.exports = {
  siteMetadata: {
    title: `Nizar Oukhchi`,
    description: `Nizar Oukhchi Freelance, Javascript Enthusiast`,
    author: `@nizaroukhchi`
  },
  pathPrefix: '/nizaroukhchi',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nizar oukhchi`,
        short_name: `nizar`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#604781`,
        display: `minimal-ui` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'] // Purge only tailwind
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
