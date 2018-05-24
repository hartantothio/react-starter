import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import Form from '../containers/Form';

const routes = (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="form" component={Form} />
  </Route>
);

export default routes;
