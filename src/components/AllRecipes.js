import React from 'react';
import useAllRecipes from '../graphql-hooks/useAllRecipesQuery';
import RecipesList from './RecipesList';
import TagsList from './TagsList';

const AllRecipes = () => {
  const recipes = useAllRecipes();

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
