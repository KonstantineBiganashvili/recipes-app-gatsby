import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const Recipe = ({ title, image, prepTime, cookTime }) => {
  const imagePath = getImage(image);

  return (
    <Link to={`/${title}`} className="recipe">
      <GatsbyImage image={imagePath} alt={title} className="recipe-img" />
      <h5>{title}</h5>
      <p>
        Prep: {prepTime} min | Cook: {cookTime} min
      </p>
    </Link>
  );
};

export default Recipe;
