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
      categories: this.props.categories || [],
      posts: this.props.posts || [],
      updates: {}
    }
    
    this.removePostHandle = this.removePostHandle.bind(this);
    this.editPostHandle = this.editPostHandle.bind(this);
    this.updateSuccessful = this.updateSuccessful.bind(this);
  }  

  removePostHandle(id) {
    console.log(id);
    // axios.delete(`/api/posts/${id}`).then((response) => {
    //   this.setState(() => ({
    //     posts: this.state.posts.filter(post => post.id !== id)
    //   }));
    // }).catch((error) => {
    //   console.log(error.message);
    // });
  }

  editPostHandle(post) {
    this.setState(() => ({updates: post}));
  }

  updateSuccessful() {
    console.log('updateSuccessful');
    this.setState(() => ({updates: {}}));
  }

  render() {
    const post = (
      this.state.posts.map((post, i) => (
        <Post 
          key={i}
          post={post}
          removePostHandle={this.removePostHandle}
          editPostHandle={this.editPostHandle}
          category={this.state.categories.find(category => post.category_id === category.id)}
        />
      ))
    );
    return (
      <div className="row">
        <div className="col-md-6">
          {!this.state.updates.title ?
            <AddPost categories={this.state.categories} /> :
            <EditPost 
              categories={this.state.categories} 
              updates={this.state.updates}
              updated={this.updateSuccessful}
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