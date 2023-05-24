import React, { useState } from "react"
import classes from "./ProfileInfo.module.css"
import userIcon from "../../../assets/images/userIcon.jpg"

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const enableEditMode = () => {
    setEditMode(true)
  }

  const disableEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      <div>
        <img className={classes.avatar} alt="" src={props.profile.photos.small ? props.profile.photos.small : userIcon} />
      </div>
      <div>{props.profile.fullName}</div>
      <br />
      <div>
        {!editMode && (
          <span
            onClick={() => {
              enableEditMode()
            }}
          >
            {props.status}
          </span>
        )}
      </div>
      <div>
        {editMode && (
          <input
            autoFocus
            onBlur={() => {
              disableEditMode()
            }}
            onChange={(e) => {
              onStatusChange(e)
            }}
            value={status}
          />
        )}
      </div>
    </div>
  )
}

export default ProfileInfo
