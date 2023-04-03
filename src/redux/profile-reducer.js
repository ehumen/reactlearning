const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: "Hi! It's my first post!", likeCounter: "150" },
        { id: 2, message: "Paw Patrol", likeCounter: "25" },
        { id: 3, message: "Yo Yo yo", likeCounter: "11" },
        { id: 4, message: "e ron don don ", likeCounter: "12" },
    ],
    newPostText: "gik"
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
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
}

export default profileReducer;