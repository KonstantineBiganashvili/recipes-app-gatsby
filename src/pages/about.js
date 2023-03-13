import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="This is an about page of simply recipes"
      />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Farm-to-table intelligentsia organic</h2>
            <p>
              DIY tofu small batch fingerstache meditation chambray pitchfork.
              Gorpcore forage polaroid butcher mumblecore fashion axe locavore
            </p>
            <p>
              DIY tofu small batch fingerstache meditation chambray pitchfork.
              Gorpcore forage polaroid butcher mumblecore fashion axe locavore
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            className="about-img"
            placeholder="dominantColor"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
