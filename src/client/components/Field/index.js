/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field as ReactFinalFormField } from 'react-final-form';

class Field extends Component {
  static propTypes = {
    children: PropTypes.func,

    // Additional props will be passed into <Field> from react-final-form
    // // https://github.com/final-form/react-final-form#fieldprops
    name: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {
    return <ReactFinalFormField {...this.props} />;
  }
}

export default Field;
