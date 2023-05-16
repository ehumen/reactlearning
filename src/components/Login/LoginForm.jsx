import { FORM_ERROR } from "final-form"
import React from "react"
import { Field, Form } from "react-final-form"
import { authAPI } from "../../api/api"
import classes from "./Login.module.css"

const LoginForm = (props) => {
  const onSubmit = async (values) => {
    return await authAPI.login(values.email, values.password, values.rememberMe).then((response) => {
      switch (response.data.resultCode) {
        case 0:
          props.getUserAuthData()
          break
        case 1:
          return { [FORM_ERROR]: response.data.messages[0] }

        case 10:
          break
      }
    })
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = "*+Required"
        }
        if (!values.password) {
          errors.password = "*-Required"
        }
        return errors
      }}
      render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" placeholder="Email">
            {({ input, meta, placeholder }) => (
              <div>
                <div>
                  <label> Login </label>
                </div>
                <input {...input} placeholder={placeholder} />
                {(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}
              </div>
            )}
          </Field>
          <Field name="password" placeholder="Password" type="password">
            {({ input, meta, placeholder }) => (
              <div>
                <div>
                  <label> Password </label>
                </div>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="rememberMe" type="checkbox">
            {({ input }) => (
              <div>
                <input {...input} />
                Remember Me
              </div>
            )}
          </Field>
          {submitError && <div className={classes.error}>{submitError}</div>}
          <div>
            <button disabled={submitting}>Log In</button>
          </div>
          {<pre>{JSON.stringify(values, undefined, 2)}</pre>}
        </form>
      )}
    />
  )
}

export default LoginForm
