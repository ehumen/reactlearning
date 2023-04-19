export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    friends: [
    ],
    totalFriendsCount: 0,
    currentPage: 1,
    pageSize: 3,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map((f) => {
                    if (f.id === action.id) {
                        return { ...f, followed: true }
                    }
                    return f;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map((f) => {
                    if (f.id === action.id) {
                        return { ...f, followed: false }
                    }
                    return f;
                })
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
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            }

        default:
            return state;
    }
}

export const follow = (userId) => {
    return ({ type: FOLLOW, id: userId });
};
export const unfollow = (userId) => {
    return { type: UNFOLLOW, id: userId };
};
export const setUsers = (users) => {
    return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
};
export const setTotalFriendsCount = (totalCount) => {
    return { type: SET_TOTAL_FRIENDS_COUNT, totalCount: totalCount }
};
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
};
export const toggleFollowingInProgress = (isFetching, userId) => {
    return { type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId }
};


export default usersReducer;