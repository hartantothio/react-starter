/* eslint-disable */
import React, { Component } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import configureStore from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, configureStore());

export default class Root extends Component {
  render() {
    return <Router history={history}>{this.props.routes}</Router>;
  }
}
