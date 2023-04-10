export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    friends: [
        { id: 1, name: "Zoë", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg/300px-Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg" },
        { id: 2, name: "Samuel", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sam.worthington.png" },
        { id: 3, name: "Sigourney", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sigourney_Weaver_by_Gage_Skidmore_4.jpg/375px-Sigourney_Weaver_by_Gage_Skidmore_4.jpg" },
        { id: 4, name: "Michelle", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Michelle_Rodriguez_Cannes_2018_cropped.jpg/330px-Michelle_Rodriguez_Cannes_2018_cropped.jpg" },
        { id: 5, name: "Robert", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Robert_Downey_jr_cropped_2008.jpg/300px-Robert_Downey_jr_cropped_2008.jpg" },
        { id: 6, name: "Scarlett", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/390px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Ok" },
        { id: 4, message: "I'm fine" },
    ],
    newMessageText: ""
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = { id: 1, message: state.newMessageText, incoming: true }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessage = () => {
    return { type: ADD_MESSAGE };
}
export const updateNewMessageText = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
}

export default messageReducer;