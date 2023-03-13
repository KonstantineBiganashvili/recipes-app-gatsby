import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadataQuery from '../graphql-hooks/useSiteMetadataQuery';

const SEO = ({ title, description }) => {
  const { title: siteTitle, description: siteDescription } =
    useSiteMetadataQuery();

  const metaDescription = description || siteDescription;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ]}
    ></Helmet>
  );
};

export default SEO;
