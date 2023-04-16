import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
