/* eslint-disable */
import React, { Component } from 'react';
import Field from '../../components/Field';
import Form from '../../components/Form';
import { compose, required, min, max } from '../../utils/validation';

class FormPage extends Component {
  handleSubmit = () => {
    console.log('Form submitted');
  };

  render() {
    return (
      <div>
        <h1>Form Container</h1>
        <Form onSubmit={this.handleSubmit}>
          {props => {
            return (
              <div>
                <div>
                  <label>Name</label>
                  <Field
                    name="firstName"
                    validate={compose(required, min(3), max(10))}
                  >
                    {({ input, meta }) => {
                      return <input {...input} type="text" />;
                    }}
                  </Field>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default FormPage;
