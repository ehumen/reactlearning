import React from "react"
import { Field, Form } from "react-final-form"
import { authAPI } from "../../api/api"

const onSubmit = async (values) => {
  console.log(JSON.stringify(values))
  console.log(values)
  authAPI.sendAuthData(JSON.stringify(values)).then((response) => {
    if (response.resultCode === 0) {
      console.log(response.data.userId)
    } else if (response.resultCode === 1) {
      console.log(response.fieldsErrors)
      response.fieldsErrors.forEach((element) => {
        alert(`Поле вводу: "${element.field}"  Помилка: "${element.error}"`)
      })
    }
  })
  window.alert(JSON.stringify(values, 0, 2))
}

const required = (value) => (value ? undefined : "*Required field")

const LoginForm = () => (
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
              {meta.submitFailed ? <span>Введіть ваш Email який ви вказували при регістрації</span> : <span> </span>}
            </div>
          )}
        </Field>
        {/* <Field name="email" placeholder="email" validate={required}>
          {(fieldState) => <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>}
        </Field> */}

        <Field name="password" placeholder="Password" validate={required} subscription={{ value: true, active: true, error: true, touched: true, submitFailed: false }}>
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

const Login = () => {
  return (
    <div>
      <div>
        <h1>LOGIN PAGE</h1>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
