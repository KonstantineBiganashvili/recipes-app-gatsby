import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby organic wayfarers echo park distillery gentrify unicorn
              iceland DIY, cold-pressed authentic pour-over typewriter
              flexitarian hammock.
            </p>
            <p>
              Farm-to-table intelligentsia organic, chambray poke cloud bread
              bitters post-ironic vegan. Godard artisan banjo hella authentic
              palo santo.
            </p>
            <p>
              DIY tofu small batch fingerstache meditation chambray pitchfork.
              Gorpcore forage polaroid butcher mumblecore fashion axe locavore
              trust fund pug air plant tacos freegan mlkshk. Yes plz stumptown
              flannel before they sold out vinyl bitters. Meh pinterest
              vaporware listicle.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact;
