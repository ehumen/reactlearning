import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        { id: 1, message: "Hi! It's my first post!", likeCounter: "150" },
        { id: 2, message: "Paw Patrol", likeCounter: "25" },
        { id: 3, message: "Yo Yo yo", likeCounter: "11" },
        { id: 4, message: "e ron don don ", likeCounter: "12" },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        case SET_PROFILE_PAGE:
            return {
                ...state, profile: action.profileId
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
}

export const addPost = (newPostText) => {
    return { type: ADD_POST, newPostText };
};
export const setProfilePage = (profileId) => {
    return { type: SET_PROFILE_PAGE, profileId }
};
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
};


export const addNewPost = (newPostText) => {
    return (dispatch) => {
        dispatch(addPost(newPostText))
    };
}
export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((response) => {
            dispatch(setProfilePage(response));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response || "no status text"))
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
}

export default profileReducer;