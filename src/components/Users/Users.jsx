import React from "react";
import classes from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let totalPagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i);
  }

  let curPage = props.currentPage;
  let curPageFirst = curPage - 3 < 0 ? 0 : curPage - 3;
  let curPageLast = curPage + 3;
  let slicedPages = pages.slice(curPageFirst, curPageLast);
  return (
    <div>
      <div>
        {slicedPages.map((el) => (
          <span
            className={props.currentPage === el ? classes.currentPage : ""}
            onClick={() => {
              props.onCurrentPageChange(el);
            }}
          >
            {el}
          </span>
        ))}
      </div>
      {props.friends.map((element) => (
        <div key={element.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + element.id}>
                <img
                  className={classes.avatar}
                  src={element.photos.small ? element.photos.small : userIcon}
                  alt="ava"
                />
              </NavLink>
            </div>
            <div>
              {element.followed ? 
              <button onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${element.id}`,
                    { withCredentials: true }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(element.id);
                    }
                  });
                }}>Unfollow</button> 
                : <button onClick={() => {
                  axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${element.id}`,{},
                    { withCredentials: true }
                    )
                    .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(element.id);
                    }
                  });}}>Follow</button>}
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
