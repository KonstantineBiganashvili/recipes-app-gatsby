import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import setupTags from '../utils/setupTags';
import slugify from 'slugify';
import SEO from '../components/SEO';

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <SEO title="Tags" description="This is a tags page of simply recipes" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, {
              lower: true,
            });

            return (
              <Link to={`/tags/${tagSlug}`} key={text} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
