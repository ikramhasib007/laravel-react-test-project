import React from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import { startEditPost } from '../../actions/posts';


function EditPost ({categories, id, dispatch, updated, ...rest}) {
    return (
        <PostForm 
            categories={categories}
            category_id={parseInt(rest.post.category_id, 10)}
            body={rest.post.body}
            title={rest.post.title}
            onSubmit={(post) => {
                dispatch(startEditPost(id, post)).then(() => {
                updated()
                })
            }}
        />
    );
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.id)
});

export default connect(mapStateToProps)(EditPost);