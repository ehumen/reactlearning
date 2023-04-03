import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.wallpaper}>
        <img
          src="https://thumbs.dreamstime.com/b/sunrise-over-carpathian-mountains-panoramic-landscape-alpine-nature-background-wide-angle-view-sunrise-over-carpathian-mountains-180499145.jpg"
          alt="top img"
        ></img>
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
