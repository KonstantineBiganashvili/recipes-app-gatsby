import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import TagsList from '../components/TagsList';
import SEO from '../components/SEO';

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes;
  const { tag } = pageContext;

  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="recipes-container">
          <TagsList recipes={recipes} />
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query recipesByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { title: ASC }
    ) {
      nodes {
        content {
          tags
        }
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default TagTemplate;
