import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from './AddPost';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: []
    }

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

  getCategories() {
    return axios.get('/api/category');
  }

  getPosts() {
    return axios.get('/api/posts');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
            <AddPost categories={this.state.categories} />
        </div>
        <div className="col-md-6">
        
        </div>
      </div>
    )
  }
}

export default Posts;

if (document.getElementById("app")) {
  ReactDOM.render(<Posts/>, document.getElementById("app"));
}