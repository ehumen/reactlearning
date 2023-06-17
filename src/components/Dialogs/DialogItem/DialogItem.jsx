import React from "react";
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

const Dialog = ({id, avatar, name}) => {
    let path = "/dialog/" + id;
    return (
        <div className={classes.dialog}>
            <div>
                <img src={avatar} alt="ava"/>
            </div>
            <div>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    );
};

export default Dialog;
