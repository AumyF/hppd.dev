import { graphql, useStaticQuery } from "gatsby";

export const useSite = (): GatsbyTypes.useSiteQuery["site"] =>
  useStaticQuery<GatsbyTypes.useSiteQuery>(graphql`
    query useSite {
      site {
        buildTime(formatString: "yyyy-MM-DD")
        siteMetadata {
          title
          description
        }
      }
    }
  `).site;
