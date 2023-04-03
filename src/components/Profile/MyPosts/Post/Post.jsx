import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"
        alt="ava"
      />
      {props.message}
      <span> {props.likeCounter} Like</span>
    </div>
  );
};

export default Post;
