import React, {useState} from "react"
import classes from "./ProfileInfo.module.css"
import userIcon from "../../../assets/images/userIcon.jpg"

const ProfileInfo = ({status, profile, updateStatus}) => {
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
    //поки не видаляю, дивлюсь як буде працювати зміна статусу
    // useEffect(() => {
    //   setStatus(status)
    // }, [status])

    return (
        <div>
            <div>
                <img className={classes.avatar} alt="" src={profile.photos.small ? profile.photos.small : userIcon}/>
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
