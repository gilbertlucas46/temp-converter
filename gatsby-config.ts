import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `temp-converter`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-react-helmet", 
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/ // See below to configure properly
        }
      }
    }
  ]
};

export default config;
