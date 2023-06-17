import React from "react"
import {Field, Form} from "react-final-form"
import classes from "./Login.module.css"

const LoginForm = ({login}) => {
    const onSubmit = async (values) => {
        return await login(values.email, values.password, values.rememberMe)
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
            render={({submitError, handleSubmit, submitting, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" placeholder="Email">
                        {({input, meta, placeholder}) => (
                            <div>
                                <div>
                                    <label> Login </label>
                                </div>
                                <input {...input} placeholder={placeholder}/>
                                {(meta.error || meta.submitError) && meta.touched &&
                                <span>{meta.error || meta.submitError}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password" placeholder="Password" type="password">
                        {({input, meta, placeholder}) => (
                            <div>
                                <div>
                                    <label> Password </label>
                                </div>
                                <input {...input} placeholder={placeholder}/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="rememberMe" type="checkbox">
                        {({input}) => (
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
