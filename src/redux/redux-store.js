import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let rootReducer = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});
//ця секція щоб дебажити
let store = createStore(rootReducer);
window.store = store;
//

export default configureStore({
    reducer: rootReducer
});
