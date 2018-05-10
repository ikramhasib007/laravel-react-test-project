import React from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import { startEditPost } from '../../actions/posts';


function EditPost ({categories, id, dispatch, feedback, ...rest}) {
    return (
        <PostForm 
            categories={categories}
            category_id={rest.post.category_id}
            body={rest.post.body}
            title={rest.post.title}
            id={id}
            feedback={feedback}
            onSubmit={(post) => {
                dispatch(startEditPost(id, post)).then(() => {
                feedback()
                })
            }}
        />
    );
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.id)
});

export default connect(mapStateToProps)(EditPost);