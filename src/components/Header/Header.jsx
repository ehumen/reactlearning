import React from "react"
import "./Header.module.css"
import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <header>
      <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/preview/media/logo/logo.png" alt="logo"></img>
      <div className={classes.login}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
