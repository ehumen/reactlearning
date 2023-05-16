import { redirect, useNavigate } from "react-router-dom";
import { authAPI } from "../api/api";

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
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserAuthData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
}

export const getUserAuthData = () => {
    return (dispatch) => {
        authAPI.getAuthData().then((response) => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserAuthData(id, email, login, true));
            }
        })
    }
}

// export const login = (email, password, rememberMe) => {
//     return (dispatch) => {
//         authAPI.login(email, password, rememberMe).then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(getUserAuthData());
//             }
//             else if (response.data.resultCode !== 0) {
//                 return response.data.messages;

//             }
//         });
//     }
// }

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
        }
    })
}


export default authReducer;
