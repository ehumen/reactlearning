import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.jpg";

const Users = (props) => {
  return (
    <div>
      <div>
        {props.slicedPages.map((e) => (
          <span
            className={props.currentPage == e ? classes.currentPage : ""}
            onClick={() => {
              props.onCurrentPageChange(e);
            }}
          >
            {e}
          </span>
        ))}
      </div>
      {props.friends.map((element) => (
        <div key={element.id}>
          <span>
            <div>
              <img
                className={classes.avatar}
                src={element.avatar ? element.avatar : userIcon}
                alt="ava"
              />
            </div>
            <div>
              {element.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(element.id);
                  }}
                >
                  {" "}
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(element.id);
                  }}
                >
                  {" "}
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
      ))}
    </div>
  );
};

export default Users;
