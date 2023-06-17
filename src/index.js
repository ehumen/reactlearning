import store from "./redux/redux-store";
import React from "react";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>);


// rerenderEntireTree(store.getState());

// store.subscribe(() => { rerenderEntireTree(store.getState()) });
