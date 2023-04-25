import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

// // ця секція щоб дебажити
// let store = createStore(rootReducer);
// window.store = store;


const store = configureStore({
    reducer: {
        messagePage: messageReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer,
    },
});

export default store;