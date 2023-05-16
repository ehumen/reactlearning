import React from "react"
import { getUserAuthData, login } from "../../redux/auth-reducer"
import { connect } from "react-redux"
import LoginForm from "./LoginForm"
import { Navigate } from "react-router-dom"

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile" />
  }
  return (
    <div>
      <div>
        <h1>LOGIN PAGE</h1>
      </div>
      <LoginForm login={props.login} getUserAuthData={props.getUserAuthData} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const LoginContainer = connect(mapStateToProps, { getUserAuthData })(Login)

export default LoginContainer
