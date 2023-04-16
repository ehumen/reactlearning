const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';

let initialState = {
    postsData: [
        { id: 1, message: "Hi! It's my first post!", likeCounter: "150" },
        { id: 2, message: "Paw Patrol", likeCounter: "25" },
        { id: 3, message: "Yo Yo yo", likeCounter: "11" },
        { id: 4, message: "e ron don don ", likeCounter: "12" },
    ],
    newPostText: "gik",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_PROFILE_PAGE:
            return {
                ...state, profile: action.profileId
            };
        default:
            return state;
    }
}

export const addPost = () => {
    return { type: ADD_POST };
};
export const postChange = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
};
export const setProfilePage = (profileId) => {
    return { type: SET_PROFILE_PAGE, profileId }
};

export default profileReducer;