import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';

const Tag = ({ tag }) => {
  const [text, value] = tag;
  const tagSlug = slugify(text, {
    lower: true,
  });

  return (
    <Link to={`/tags/${tagSlug}`} key={text}>
      {text} ({value})
    </Link>
  );
};

export default Tag;
