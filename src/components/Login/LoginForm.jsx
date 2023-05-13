import React from "react"
import { Field, Form } from "react-final-form"

const LoginForm = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe)
  }

  const required = (value) => (value ? undefined : "*Required field")

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" placeholder="Email" validate={required} subscription={{ value: true, active: true, error: true, touched: true, submitFailed: false }}>
            {({ input, meta, placeholder }) => (
              <div>
                <div>
                  <label> Login </label>
                </div>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {/* <Field name="email" placeholder="email" validate={required}>
          {(fieldState) => <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>}
        </Field> */}

          <Field name="password" placeholder="Password" type="password" validate={required} subscription={{ value: true, active: true, error: true, touched: true, submitFailed: false }}>
            {({ input, meta, placeholder }) => (
              <div>
                <div>
                  <label> Password </label>
                </div>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && meta.submitError && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div>
            <Field component="input" name="rememberMe" type="checkbox" />
            Remember Me
          </div>
          <div>
            <button disabled={submitting}>Log In</button>
          </div>
          {/* {(values) => <pre>{JSON.stringify(values, undefined, 2)}</pre>} */}
        </form>
      )}
    />
  )
}

export default LoginForm
