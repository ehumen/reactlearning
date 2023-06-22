import React, {useState} from "react"
import classes from "./ProfileInfo.module.css"
import userIcon from "../../../assets/images/userIcon.jpg"
import editPen from "../../../assets/images/editpen.svg"

const ProfileInfo = ({status, profile, updateStatus, isOwner, updateUserProfilePhoto, userId}) => {
    const [editMode, setEditMode] = useState(false)
    const [userStatus, setStatus] = useState(status)

    const enableEditMode = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        updateStatus(userStatus)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const onUserPhotoSelect = (e) => {
        const chosenImage = e.target.files[0];
        const formData = new FormData();
        formData.append("image", chosenImage);
        updateUserProfilePhoto(formData, userId);
    }

    return (
        <div>
            <div>
                <img className={classes.avatar} alt="" src={profile.photos.large || userIcon}/>

                {isOwner &&
                <label for="profile-photo" className={classes.editPen}> <img src={editPen}/>
                    <input type="file" accept="image/*" id="profile-photo" onChange={onUserPhotoSelect}/> </label>}
            </div>
            <div>{profile.fullName}</div>
            <br/>
            <div>
                {!editMode && (
                    <span onClick={() => enableEditMode()}>
                        {status}
                    </span>)}
            </div>

            <div>
                {editMode && (
                    <input
                        autoFocus
                        onBlur={() => disableEditMode()}
                        onChange={(e) => onStatusChange(e)}
                        value={userStatus}
                    />
                )}
            </div>
        </div>
    )
}

export default ProfileInfo
