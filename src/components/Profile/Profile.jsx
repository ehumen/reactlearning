import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo status={props.status} profile={props.profile} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </main>
  )
}

export default Profile
