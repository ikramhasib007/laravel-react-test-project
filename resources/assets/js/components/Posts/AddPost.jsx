import React from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import { startAddPost } from '../../actions/posts';

function AddPost({categories, dispatch}) {
  return (
      <PostForm 
        categories={categories} 
        onSubmit={(post) => {
            dispatch(startAddPost(post));
        }}
      />
    );
}

export default connect()(AddPost);