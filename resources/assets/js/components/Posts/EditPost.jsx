import React from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import { startEditPost } from '../../actions/posts';


class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updates: this.props.updates,
            completed: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.updates !== this.state.updates;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        this.setState(() => ({
            updates: this.props.updates
        }));
    }

    render() {
        return (
            <PostForm 
              categories={this.props.categories}
              {...this.props.post} 
              onSubmit={(post) => {
                  this.props.dispatch(startEditPost(this.props.updates.id, post))
                  this.props.updated()
              }}
            />
        );
    }
}
const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.updates.id)
});

export default connect(mapStateToProps)(EditPost);