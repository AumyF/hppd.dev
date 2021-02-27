/** @type import('gatsby').GatsbyConfig */
module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
        allowNamespaces: true,
      },
    },

    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://zenn.dev/aumy/feed`,
        name: `Zenn`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://blog.hppd.dev/rss.xml`,
        name: "Blog",
      },
    },
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: { trackingId: process.env.GOOGLE_ANALYTICS_ID },
    // },
    `gatsby-plugin-emotion`,
    { resolve: `gatsby-plugin-typegen` },
  ],
};
