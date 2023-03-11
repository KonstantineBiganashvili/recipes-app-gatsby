/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@KonstantineBiganashvili',
    person: {
      name: 'Konstantine',
      age: 24,
    },
    simpleData: ['item1', 'item2'],
    complexData: [
      {
        name: 'Sdsdasd',
        age: 323,
      },
      {
        name: 'ghdfgdgdfgdfgdf',
        age: 676,
      },
      {
        name: 'jhfhfg',
        age: 867,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
