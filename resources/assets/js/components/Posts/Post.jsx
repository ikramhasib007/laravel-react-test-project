import React from 'react';
import {connect} from 'react-redux';
import { startRemovePost } from '../../actions/posts';

function Post(props) {
  return (
    <dl className="mb-2 py-2 post">
      <dt className="col-sm-12 d-flex justify-content-between align-items-start">
      <blockquote className="blockquote mb-1">
        <a 
          className="mb-0" 
          onClick={() => props.editPostHandle(props.post)}
          href="#"
        >{props.post.title}</a>
        <footer className="blockquote-footer">{props.post.categoryName} <cite>Category</cite></footer>
      </blockquote>
      <button 
        className="btn btn-danger btn-xs ml-1 mt-1"
        onClick={() => {props.feedback(); props.dispatch(startRemovePost(props.post.id))}}
      >X</button>
      </dt>
      <dd className="col-sm-12 mb-0">
        <p>{props.post.body}</p>
      </dd>
    </dl>
  );
}

export default connect()(Post);