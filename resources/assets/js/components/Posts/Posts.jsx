import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import getVisiblePosts from '../../selectors/posts';
import getVisibleCategories from '../../selectors/categories';
import AddPost from './AddPost';
import EditPost from './EditPost';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: {}
    }
    
    this.editPostHandle = this.editPostHandle.bind(this);
    this.updateFeedback = this.updateFeedback.bind(this);
  }  

  editPostHandle(post) {
    this.setState(() => ({updates: post}));
  }

  updateFeedback() {
    // console.log('updateFeedback');
    this.setState(() => ({updates: {}}));
  }

  render() {
    const post = (
      this.props.posts.map((post, i) => (
        <Post 
          key={i}
          post={post}
          editPostHandle={this.editPostHandle}
          category={this.props.categories.find(category => post.category_id === category.id)}
        />
      ))
    );
    return (
      <div className="row">
        <div className="col-md-6">
          {!this.state.updates.title ?
            <AddPost categories={this.props.categories} /> :
            <EditPost 
              categories={this.props.categories} 
              id={this.state.updates.id}
              feedback={this.updateFeedback}
            />
          }
        </div>
        <div className="col-md-6">
          {post}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: getVisiblePosts(state.posts, state.filters),
  categories: getVisibleCategories(state.categories, state.filters)
});

export default connect(mapStateToProps)(Posts);