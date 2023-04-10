import React from "react";
import { connect } from "react-redux";
import { addPost, postChange } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, postChange })(
  MyPosts
);

export default MyPostsContainer;
