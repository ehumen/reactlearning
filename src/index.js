import store from "./redux/redux-store";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>
            <App />
        </Provider>);


// rerenderEntireTree(store.getState());

// store.subscribe(() => { rerenderEntireTree(store.getState()) });
