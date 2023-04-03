export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

let initialState = {
    friends: [
        //     { id: 1, name: "Zoë", followed: true, status: "Wakanda Forever!", location: { city: "zimbabwe", country: "Wakanda" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg/300px-Zoe_Saldana_%2828584925641%29_%28cropped_2%29.jpg" },
        //     { id: 2, name: "Samuel", followed: false, status: "Turuk tok mak", location: { city: "BigTree", country: "Pandora" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sam.worthington.png" },
        //     { id: 3, name: "Sigourney", followed: true, status: "Ripley", location: { city: "skyrim", country: "spacehole" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sigourney_Weaver_by_Gage_Skidmore_4.jpg/375px-Sigourney_Weaver_by_Gage_Skidmore_4.jpg" },
        //     { id: 4, name: "Michelle", followed: false, status: "Valkiria!", location: { city: "Asgard", country: "Walghalla" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Michelle_Rodriguez_Cannes_2018_cropped.jpg/330px-Michelle_Rodriguez_Cannes_2018_cropped.jpg" },
        //     { id: 5, name: "Robert", followed: false, status: "Iron man ;)", location: { city: "New York", country: "USA" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Robert_Downey_jr_cropped_2008.jpg/300px-Robert_Downey_jr_cropped_2008.jpg" },
        //     { id: 6, name: "Scarlett", followed: true, status: "Black Widow!", location: { city: "Kiyiv", country: "Ukraine" }, avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/390px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg" }
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map((f) => {
                    if (f.id === action.id) {
                        f.followed = true;
                        // return { ...f, followed: true }
                    }
                    return f;
                })

            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map((f) => {
                    if (f.id === action.id) {
                        // f.followed = false;
                        return { ...f, followed: false }
                    }
                    return f;
                })
            };
        case SET_USERS:
            return {
                ...state,
                friends: [...state.friends, ...action.users]
            };
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return ({ type: FOLLOW, id: userId });
}
export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, id: userId };
}
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
}


export default usersReducer;