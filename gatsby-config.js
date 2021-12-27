// env variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// gatsby breakpoints
const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 600px)",
  md: "(max-width: 900px)",
  l: "(max-width: 1200px)",
};

module.exports = {
  // Site config
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Nicolas Pauletto",
    description: "ReactJS Front-end developer portfolio",
    authur: "Nicolas Pauletto",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: false,
        overlayDrafts: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },

    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
};
