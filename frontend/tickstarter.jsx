import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root'
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {users: { [window.currentUser.id]: window.currentUser }}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        } else {
        store = configureStore();
    }



    const root = document.getElementById("root");
    // const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    // ReactDOM.render(<h1>HI</h1>, root);
});