import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './../reducers/authReducer';
import postsReducer from './../reducers/postsReducer';
import filtersReducer from '../reducers/filtersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
   const store = createStore(
      combineReducers({
         auth: authReducer,
         posts: postsReducer,
         filters: filtersReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
   );

   return store;
};