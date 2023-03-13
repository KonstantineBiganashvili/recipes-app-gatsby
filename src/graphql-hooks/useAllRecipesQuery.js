import { useStaticQuery, graphql } from 'gatsby';

const useAllRecipes = () => {
  const allRecipes = useStaticQuery(graphql`
    query {
      allContentfulRecipe(sort: { title: ASC }) {
        nodes {
          id
          title
          cookTime
          prepTime
          content {
            tags
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  `);

  return allRecipes.allContentfulRecipe.nodes;
};

export default useAllRecipes;
