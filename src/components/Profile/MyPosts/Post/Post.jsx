import React from "react"
import classes from "./Post.module.css"
import postIcon from "../../../../assets/images/PostIcon.jpg"

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={postIcon} alt="ava" />
      {props.message}
      <span> {props.likeCounter} Like</span>
    </div>
  )
}

export default Post
