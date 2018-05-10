import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import {startSetPosts} from '../actions/posts';
import {startSetCategories} from '../actions/categories';
import Posts from './Posts/Posts';


const store = configureStore();


const jsx = (
  <Provider store={store}>
    <Posts />
  </Provider>
);

ReactDOM.render(<div className="loader"><img src="/images/loader.gif"/></div>, document.getElementById('app'));

store.dispatch(startSetPosts()).then(() => {
  store.dispatch(startSetCategories()).then(() => {
    if (document.getElementById("app")) {
      ReactDOM.render(jsx, document.getElementById("app"));
    }
  })
});
