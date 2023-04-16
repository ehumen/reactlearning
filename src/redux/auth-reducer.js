const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setUserAuthData = (id, email, login) => {
    return { type: SET_USER_DATA, id, email, login }
}

export default authReducer;
