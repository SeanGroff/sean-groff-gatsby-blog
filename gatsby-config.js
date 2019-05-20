module.exports = {
  siteMetadata: {
    title:
      'Sean Groff | Web Developer creating awesome content for JavaScript and React',
    author: 'Sean Groff',
    description:
      'Sean Groff - Web Developer creating awesome content for JavaScript and React',
    siteUrl: 'https://www.seangroff.com',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#007aff`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131600511-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Groffs Blog`,
        short_name: `SeanGroff`,
        start_url: `/`,
        background_color: `#f8f7f4`,
        theme_color: `#007aff`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
