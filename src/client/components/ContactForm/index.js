/* eslint-disable */
import React from 'react';
import { Form, Field } from 'react-final-form';

// const validationRules = {
//   firstName: [
//     'length:2'
//   ]
// };

const validate = values => {
  console.log('validate');
  console.log(values);
};

const validateField = (values, allValues) => {
  console.log('validateField');
  console.log(values);
  console.log(allValues);
};

const onSubmit = (values, form, callback) => {
  console.log('onSubmit');
  console.log(values);
  console.log(form);
};

const ContactForm = () => (
  <Form onSubmit={onSubmit} validate={validate} validateOnBlur>
    {({ handleSubmit, reset, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            validate={validateField}
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            validate={validateField}
            validateFields={['firstName']}
          />
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  </Form>
);

export default ContactForm;
