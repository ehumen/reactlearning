import { getUserAuthData } from "./auth-reducer";

const INITIALIZED_SUCSSESED = 'INITIALIZED_SUCSSESED';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSSESED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializeSucssesed = () => {
    return { type: INITIALIZED_SUCSSESED }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserAuthData());
    //for future initializing things
    //

    Promise.all([promise]).then(() => {
        dispatch(initializeSucssesed())
    })
}


export default appReducer;
