import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const click = dispatch => {
  dispatch({
    type: 'click'
  });
};

class App extends Component {
  state = {
    counter: 0
  };

  propTypes = {
    dispatch: PropTypes.func
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    click(this.props.dispatch);
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>App Containers {this.state.counter}</h1>
        <p>
          <Link to="/home">Home</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(null, mapDispatchToProps)(App);
