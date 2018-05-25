import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import routes from './routes';
import Root from './Root';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const render = appRoutes => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Root routes={appRoutes} />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes);
  });
}
