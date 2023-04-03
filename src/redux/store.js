import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi! It's my first post!", likeCounter: "150" },
                { id: 2, message: "Paw Patrol", likeCounter: "25" },
                { id: 3, message: "Yo Yo yo", likeCounter: "11" },
                { id: 4, message: "e ron don don ", likeCounter: "12" },
            ],
            newPostText: "gik"
        },
        // dialogsPage: {

        //     dialogData: [
        //         { id: 1, name: "Zoë" },
        //         { id: 2, name: "Samuel" },
        //         { id: 3, name: "Sigourney" },
        //         { id: 4, name: "Michelle" },
        //         { id: 5, name: "President" },
        //         { id: 6, name: "Lena" },
        //     ],

        //     messageData: [
        //         { id: 1, message: "Hi" },
        //         { id: 1, message: "How are you?" },
        //         { id: 1, message: "Ok" },
        //         { id: 1, message: "I'm fine" },
        //     ]
        // },
        friends: [
            { id: 1, name: "Zoë", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg/300px-Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg" },
            { id: 2, name: "Samuel", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sam.worthington.png" },
            { id: 3, name: "Sigourney", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sigourney_Weaver_by_Gage_Skidmore_4.jpg/375px-Sigourney_Weaver_by_Gage_Skidmore_4.jpg" },
            { id: 4, name: "Michelle", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Michelle_Rodriguez_Cannes_2018_cropped.jpg/330px-Michelle_Rodriguez_Cannes_2018_cropped.jpg" },
            { id: 5, name: "Robert", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Robert_Downey_jr_cropped_2008.jpg/300px-Robert_Downey_jr_cropped_2008.jpg" },
            { id: 6, name: "Scarlett", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/390px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg" }
        ],
        messagePage: {
            messages: [
                { id: 1, message: "Hi", incoming: true },
                { id: 2, message: "How are you?", incoming: true },
                { id: 3, message: "Ok" },
                { id: 4, message: "I'm fine" },
            ],
            newMessageText: " "
        },
    },
    getState() {
        return this._state;
    },
    _render() { console.log("State changed!") },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._render(this.getState());

    },
    subscribe(observer) {
        this._render = observer;
    }
}

