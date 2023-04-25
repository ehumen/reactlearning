import React from "react";
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


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> :
          <Users
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalFriendsCount={this.props.totalFriendsCount}
            onCurrentPageChange={this.onCurrentPageChange}
            friends={this.props.friends}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            setProfilePage={this.props.setProfilePage}
            followingInProgress={this.props.followingInProgress}
          />}
      </>
    );
  }
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


