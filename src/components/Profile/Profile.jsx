import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({status, profile, updateStatus, isOwner, updateUserProfilePhoto, userId}) => {
    return (
        <main>
            <ProfileInfo userId={userId} isOwner={isOwner} status={status} profile={profile} updateUserProfilePhoto={updateUserProfilePhoto} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
