import {FORM_ERROR} from "final-form";
import {authAPI} from "../api/api";

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
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
}

export const getUserAuthData = () => async (dispatch) => {
    const response = await authAPI.getAuthData();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserAuthData(id, email, login, true));
    }

};


export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe);
        switch (response.data.resultCode) {
            case 0:
                dispatch(getUserAuthData());
                break;
            case 1:
                return {[FORM_ERROR]: response.data.messages[0]};
            case 10:
                break;
        }
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
    }
};

export default authReducer;
