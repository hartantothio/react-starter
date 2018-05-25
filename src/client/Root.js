import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import configureStore from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, configureStore());

export default class Root extends Component {
  static propTypes = {
    routes: PropTypes.any
  };

  render() {
    return <Router history={history}>{this.props.routes}</Router>;
  }
}
