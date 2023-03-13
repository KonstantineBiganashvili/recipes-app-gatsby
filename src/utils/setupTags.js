const setupTags = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      allTags[tag] ? allTags[tag]++ : (allTags[tag] = 1);
    });
  });

  const tagsArray = Object.entries(allTags).sort((a, b) => b[1] - a[1]);

  return tagsArray;
};

export default setupTags;
