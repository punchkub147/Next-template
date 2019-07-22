import React from "react";
import _ from "lodash";
import { Formik, Field, ErrorMessage } from "formik";

import Layout from "../components/Layout";

const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

const validateEmail = email => {
  if (!email) return "Required";
  if (!isEmail(email)) return "Invalid email address";
};
const validatePassword = password => {
  if (password.length < 6) return "password must length more than 6";
};
const validateColor = color => {
  if (color !== "blue") return "Color should be blue";
};

const Form = () => (
  <Layout>
    <h1>Formik</h1>
    <Formik
      initialValues={{ email: "", password: "", color: "red" }}
      validate={values =>
        _.pickBy(
          {
            email: validateEmail(values.email),
            password: validatePassword(values.password),
            color: validateColor(values.color)
          },
          _.identity
        )
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />
          <br />
          <Field name="password" component={CustomInputComponent} />
          <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="color" />
          <br />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </Layout>
);

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input
      type="text"
      {...field}
      {...props}
      style={{
        borderColor: errors[field.name] && touched[field.name] && "red"
      }}
    />
    <ErrorMessage
      name={field.name}
      render={msg => <div style={{ color: "red" }}>{msg}</div>}
    />
  </div>
);

export default Form;
