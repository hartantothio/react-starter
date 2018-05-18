import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../containers/App';
import Home from '../containers/Home';

const routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default routes;
