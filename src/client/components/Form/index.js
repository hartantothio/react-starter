/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as ReactFinalForm } from 'react-final-form';

class Form extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,

    // Additional props will be passed into <Field> from react-final-form
    // https://github.com/final-form/react-final-form#formprops
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const { children, ...restProps } = this.props;

    return (
      <ReactFinalForm {...restProps}>
        {formRenderProps => {
          const { handleSubmit } = formRenderProps;

          return (
            <form onSubmit={handleSubmit}>{children(formRenderProps)}</form>
          );
        }}
      </ReactFinalForm>
    );
  }
}

export default Form;
