import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const RecentFriends = (props) => {
  return (
    <div className={classes.recentFriend}>
      <div>
        <img src={props.avatar} alt="ava" />
      </div>
      <div>{props.name}</div>
    </div>
  );
};

export default RecentFriends;
