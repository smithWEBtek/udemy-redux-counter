// import React, { createElement } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = store => {
  console.log('[Middleware] prior state', store.getState())
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      let asdf = { ...store.getState() };
      console.log('[Middleware] next state (what does it all mean?) answer:', asdf.res.meaningOfLife)
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

// console.log('state ctr', store.getState().ctr)
// console.log('state res', store.getState().res)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
