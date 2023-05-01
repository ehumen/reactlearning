import React, { useState } from "react"
import classes from "./ProfileInfo.module.css"
import userIcon from "../../../assets/images/userIcon.jpg"

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      {/* <div className={classes.wallpaper}>
        <img
          src="https://thumbs.dreamstime.com/b/sunrise-over-carpathian-mountains-panoramic-landscape-alpine-nature-background-wide-angle-view-sunrise-over-carpathian-mountains-180499145.jpg"
          alt="top img"
        ></img>
      </div> */}
      <div>
        <img className={classes.avatar} src={props.profile.photos.small ? props.profile.photos.small : userIcon} />
      </div>
      <div>{props.profile.fullName}</div>
      <br />
      <div>
        {!editMode && (
          <span
            onClick={() => {
              setEditMode(true)
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
              setEditMode(false)
            }}
            value={props.status}
          />
        )}
      </div>
    </div>
  )
}

export default ProfileInfo
