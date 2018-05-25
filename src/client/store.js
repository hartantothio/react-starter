import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// To remove the following warning:
// <Provider> does not support changing `store` on the fly.
let store;

export default function configureStore(initialState = {}) {
  if (!store) {
    const enhancers = [];

    // Build the middleware for intercepting and dispatching navigation actions
    // const middleware = [thunk, routerMiddleware(history)];
    const middleware = [thunk];

    if (process.env.NODE_ENV === 'development') {
      const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

      if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
      }
    }

    const composedEnhancers = compose(
      applyMiddleware(...middleware),
      ...enhancers
    );

    store = createStore(reducers, initialState, composedEnhancers);
  }

  return store;
}
