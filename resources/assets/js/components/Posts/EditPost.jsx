import React from 'react';
import PostForm from './PostForm';

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
              {...this.state.updates} 
              onSubmit={(post) => {
                  console.log(post);
                  axios.put(`/api/posts/${this.state.updates.id}`, post).then((response) => {
                    console.log(response);  
                    this.setState(() => ({
                          completed: true
                      }));
                      this.props.updated()
                  }).catch((error) => {
                      console.log(error);
                  });
              }}
            />
        );
    }
}

export default EditPost;