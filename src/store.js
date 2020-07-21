import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/restfulReducers';

const functionDispatchMiddleware = store => next => action => {
  if(typeof action !== 'function') return next(action);
  action(store.dispatch);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(functionDispatchMiddleware)
  )
);
