import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadataQuery = () => {
  const siteData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return siteData.site.siteMetadata;
};

export default useSiteMetadataQuery;
