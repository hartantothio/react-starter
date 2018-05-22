/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import createRoutes from './routes';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>{createRoutes(store)}</Provider>,
  document.getElementById('app')
);
