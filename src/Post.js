import React, { useEffect } from 'react';

const Post = ({ post }) => {
  useEffect(() => {
    console.log('post created');

    return () => {
      console.log('cpmponent exit');
    };
  }, []);

  return <div key={post.id}>{post.name}</div>;
};

export default Post;
