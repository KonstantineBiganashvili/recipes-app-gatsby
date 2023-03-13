import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';
import React from 'react';

const Recipe = ({ title, image, prepTime, cookTime }) => {
  const imagePath = getImage(image);
  const slug = slugify(title, { lower: true });

  return (
    <Link to={`/${slug}`} className="recipe">
      <GatsbyImage image={imagePath} alt={title} className="recipe-img" />
      <h5>{title}</h5>
      <p>
        Prep: {prepTime} min | Cook: {cookTime} min
      </p>
    </Link>
  );
};

export default Recipe;
