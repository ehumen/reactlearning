import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Navbar.module.css";
import RecentFriends from "./RecentFriends";

const Navbar = (props) => {
  let activeClassName = "active-link";
  let notActiveClassName = "not-active-link";

  // let recentList = props.state.slice(0, 3);

  // let recentFriendsItem = recentList.map((e) => (
  //   <RecentFriends id={e.id} avatar={e.avatar} name={e.name} />
  // ));

  return (
    <nav>
      <div className={classes.navItem}>
        <NavLink to="profile">Profile</NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
          to="dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
          to="news"
        >
          News
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
          to="music"
        >
          Music
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
          to="settings"
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink to="users">Friends</NavLink>
      </div>
      {/* <div className={classes.recentFriends}>{recentFriendsItem}</div> */}
    </nav>
  );
};

export default Navbar;
