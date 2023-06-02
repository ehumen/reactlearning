import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({status, profile, updateStatus}) => {
    return (
        <main>
            <ProfileInfo status={status} profile={profile} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
