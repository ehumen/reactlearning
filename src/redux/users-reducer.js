import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    friends: [],
    totalFriendsCount: 0,
    currentPage: 1,
    pageSize: 3,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: updateObjectInArray(state.friends, 'id', action.id, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: updateObjectInArray(state.friends, 'id', action.id, {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                friends: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
}

export const follow = (userId) => {
    return ({type: FOLLOW, id: userId});
};
export const unfollow = (userId) => {
    return {type: UNFOLLOW, id: userId};
};
export const setUsers = (users) => {
    return {type: SET_USERS, users};
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
};
export const setTotalFriendsCount = (totalCount) => {
    return {type: SET_TOTAL_FRIENDS_COUNT, totalCount: totalCount}
};
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
};
export const toggleFollowingInProgress = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId}
};


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const response = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(setUsers(response.items));
        dispatch(toggleIsFetching(false));
        dispatch(setTotalFriendsCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    (toggleFollowingInProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export const unfollowUser = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowFriend, unfollow);
    }
}

export const followUser = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followFriend, follow);
    }
}

export default usersReducer;