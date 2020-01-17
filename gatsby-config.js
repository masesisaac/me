module.exports = {
  siteMetadata: {
    title: `Isaac`,
    description: `A personal portfolio site built with GatsbyJS`,
    author: `masesisaac`,
    socialLinks: [
      {
        name: "Email",
        url: "mailto:masesisaac@gmail.com"
      },
      {
        name: "Twitter",
        url: "https://www.twitter.com/masesisaac"
      },
      {
        name: "Github",
        url: "https://github.com/masesisaac"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/masesisaac"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-156458550-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `masesisaac-personal-portfolio`,
        short_name: `Isaac's portfolio`,
        start_url: `/`,
        background_color: `#616CAA`,
        theme_color: `#616CAA`,
        display: `minimal-ui`,
        icon: `src/images/code_logo.png` // This path is relative to the root of the site.
      }
    },
  ]
};
