import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { setProfilePage } from "../../redux/profile-reducer";


const UsersContainer = (props) => {

  useEffect(() => { props.getUsers(props.currentPage, props.pageSize) }, [props.currentPage, props.pageSize]);


  const onCurrentPageChange = (pageNumber) => {
    props.getUsers(pageNumber, props.pageSize);
    props.setCurrentPage(pageNumber);
  }


  return (
    <>
      {props.isFetching ? <Preloader /> :
        <Users
          currentPage={props.currentPage}
          pageSize={props.pageSize}
          totalFriendsCount={props.totalFriendsCount}
          onCurrentPageChange={onCurrentPageChange}
          friends={props.friends}
          followUser={props.followUser}
          unfollowUser={props.unfollowUser}
          setProfilePage={props.setProfilePage}
          followingInProgress={props.followingInProgress}
        />}
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    friends: state.usersPage.friends,
    totalFriendsCount: state.usersPage.totalFriendsCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, { setCurrentPage, setProfilePage, getUsers, unfollowUser, followUser })(UsersContainer);


