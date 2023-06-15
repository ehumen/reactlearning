import React from "react"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   friends,
                   totalFriendsCount,
                   pageSize,
                   currentPage,
                   onCurrentPageChange,
                   followingInProgress,
                   unfollowUser,
                   followUser,
                   portionSize
               }) => {
    return (
        <div>
            <Paginator totalItemsCount={totalFriendsCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onCurrentPageChange={onCurrentPageChange}
                       portionSize={portionSize}
            />
            <div>
                {friends.map((element) => (
                    <User key={element.id}
                          element={element}
                          followingInProgress={followingInProgress}
                          unfollowUser={unfollowUser}
                          followUser={followUser}/>))}
            </div>
        </div>
    )
}

export default Users
