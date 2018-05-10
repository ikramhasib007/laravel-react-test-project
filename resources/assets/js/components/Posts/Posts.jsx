import React from 'react';
import ReactDOM from 'react-dom';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>Hello React!!</div> )
    }
}
 
export default Posts;

if(document.getElementById("app")) {
    ReactDOM.render(<Posts />, document.getElementById("app"));
}