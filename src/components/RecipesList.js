import React from 'react';
import Recipe from './Recipe';

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        return (
          <Recipe
            key={id}
            title={title}
            image={image}
            prepTime={prepTime}
            cookTime={cookTime}
          />
        );
      })}
    </div>
  );
};

export default RecipesList;
