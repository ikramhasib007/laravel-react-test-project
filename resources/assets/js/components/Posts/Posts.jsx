import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from './AddPost';
import EditPost from './EditPost';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: [],
      updates: {}
    }

    this.removePostHandle = this.removePostHandle.bind(this);
    this.editPostHandle = this.editPostHandle.bind(this);
    this.updateSuccessful = this.updateSuccessful.bind(this);
  }  
  componentWillMount() {
    axios.all([this.getCategories(), this.getPosts()]).then(axios.spread((categories, posts) => {
      this.setState(()=>({
        categories:categories.data,
        posts: posts.data
      }));
    })).catch((error)=>{
      console.log(error.message);
    });
  }

  removePostHandle(id) {
    axios.delete(`/api/posts/${id}`).then((response) => {
      this.setState(() => ({
        posts: this.state.posts.filter(post => post.id !== id)
      }));
    }).catch((error) => {
      console.log(error.message);
    });
  }

  editPostHandle(post) {
    this.setState(() => ({updates: post}));
  }

  updateSuccessful() {
    console.log('updateSuccessful');
    this.setState(() => ({updates: {}}));
  }

  getCategories() {
    return axios.get('/api/category');
  }

  getPosts() {
    return axios.get('/api/posts');
  }

  render() {
    const post = (
      this.state.posts.map((post, i) => (
        <Post 
          key={i}
          post={post}
          removePostHandle={this.removePostHandle}
          editPostHandle={this.editPostHandle}
          categoryName={this.state.categories.find(category => post.category_id === category.id).name}
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

export default Posts;

if (document.getElementById("app")) {
  ReactDOM.render(<Posts/>, document.getElementById("app"));
}