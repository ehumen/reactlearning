import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalFriendsCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { setProfilePage } from "../../redux/profile-reducer";
import { getPages, getUsers } from "../../api/api";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.setTotalFriendsCount(response.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onCurrentPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    getPages(pageNumber, this.props.pageSize).then((response) => {
        this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
      });
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
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            setProfilePage={this.props.setProfilePage}
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
  };
};


export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalFriendsCount, toggleIsFetching, setProfilePage })(UsersContainer);
