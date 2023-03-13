import { graphql, Link } from 'gatsby';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import slugify from 'slugify';
import SEO from '../components/SEO';

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { raw },
    image,
  } = data.contentfulRecipe;

  const { tags, instructions, ingredients, tools } = content;
  const recipeImage = getImage(image);
  const parsedDescription = JSON.parse(raw).content[0].content[0].value;

  const slugifyTag = (tag) => {
    return slugify(tag, {
      lower: true,
    });
  };

  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={recipeImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{parsedDescription}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :
                {tags.map((tag) => (
                  <Link to={`/tags/${slugifyTag(tag)}`} key={tag}>
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => (
                <div key={instruction} className="single-instruction">
                  <header>
                    <p>stop {index + 1}</p>
                    <div></div>
                  </header>
                  {instruction}
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient) => (
                  <p key={ingredient} className="single-ingredient">
                    {ingredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool) => (
                  <p key={tool} className="single-tool">
                    {tool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default RecipeTemplate;
