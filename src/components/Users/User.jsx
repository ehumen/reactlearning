import React from "react"
import classes from "./Users.module.css"
import userIcon from "../../assets/images/userIcon.jpg"
import {NavLink} from "react-router-dom"

const User = ({element, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div>
            <span>
            <div>
              <NavLink to={"/profile/" + element.id}>
                <img className={classes.avatar} src={element.photos.small ? element.photos.small : userIcon} alt="ava"/>
              </NavLink>
            </div>
            <div>
              {element.followed ? (
                  <button
                      disabled={followingInProgress.some((id) => id === element.id)}
                      onClick={() => unfollowUser(element.id)}
                  >
                      Unfollow
                  </button>
              ) : (
                  <button
                      disabled={followingInProgress.some((id) => id === element.id)}
                      onClick={() => followUser(element.id)}
                  >
                      Follow
                  </button>
              )}
            </div>
          </span>
            <span>
            <span>
              <div>{element.name}</div>
              <div>{element.status}</div>
            </span>
            <span>
              <div>{"element.location.city"}</div>
              <div>{"element.location.country"}</div>
            </span>
          </span>
        </div>
    )

}


export default User
