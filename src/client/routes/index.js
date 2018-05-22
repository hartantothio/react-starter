import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import Form from '../containers/Form';

export default function createRoutes(store) {
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="home" component={Home} />
      <Route path="form" component={Form} />
    </Router>
  );
}
