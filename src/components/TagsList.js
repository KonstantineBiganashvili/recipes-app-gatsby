import React from 'react';
import useAllRecipes from '../graphql-hooks/useAllRecipesQuery';
import setupTags from '../utils/setupTags';
import Tag from './Tag';

const TagsList = () => {
  const recipes = useAllRecipes();
  const newTags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TagsList;
