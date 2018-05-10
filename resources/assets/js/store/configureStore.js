import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/postsReducer';
import filterReducer from '../reducers/filterReducer';

const configureStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(combineReducers(
      {
        posts: postsReducer,
        filters: filterReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );

  return store;
}

export default configureStore;