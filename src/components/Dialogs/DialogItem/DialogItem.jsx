import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const Dialog = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={classes.dialog}>
      <div>
        <img src={props.avatar} alt="ava" />
      </div>
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default Dialog;
