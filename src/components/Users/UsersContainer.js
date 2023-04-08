import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalFriendsCountAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalFriendsCount(response.data.totalCount);
      });
  }

  onCurrentPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let totalPagesCount = Math.ceil(
      this.props.totalFriendsCount / this.props.pageSize
    );

    let pages = [];

    for (let i = 1; i <= totalPagesCount; i++) {
      pages.push(i);
    }

    let curPage = this.props.currentPage;
    let curPageFirst = curPage - 3 < 0 ? 0 : curPage - 3;
    let curPageLast = curPage + 3;
    let slicedPages = pages.slice(curPageFirst, curPageLast);

    return <Users
      currentPage={this.props.currentPage}
      onCurrentPageChange={this.onCurrentPageChange}
      friends={this.props.friends}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      slicedPages={slicedPages}
    />
  }
}

// currentPage = { this.props.currentPage }
// onCurrentPageChange = { this.onCurrentPageChange }
// friends = { this.props.friends }
// follow = { this.props.follow }
// unfollow = { this.props.unfollow }
// slicedPages = { slicedPages }


const mapStateToProps = (state) => {
  return {
    friends: state.usersPage.friends,
    totalFriendsCount: state.usersPage.totalFriendsCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalFriendsCount: (totalCount) => {
      dispatch(setTotalFriendsCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


