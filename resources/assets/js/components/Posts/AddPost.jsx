import React from 'react';
import PostForm from './PostForm';

function AddPost({categories}) {
  return (
      <PostForm 
        categories={categories} 
        onSubmit={(post) => {
            axios.post('/api/posts', post).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error.message);
            });
        }}
      />
    );
}

export default AddPost;