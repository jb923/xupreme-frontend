import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './stylesheets/index.css';
import "./stylesheets/header.css";
import "./stylesheets/footer.css";
import "./stylesheets/featuredItem.css";
import "./stylesheets/navbars.css";
import "./stylesheets/session.css";
import "./stylesheets/news.css";
import "./stylesheets/stores.css";
import "./stylesheets/productlist.css";
import "./stylesheets/productpage.css";
import "./stylesheets/cart.css";
import "./stylesheets/terms.css";
import "./stylesheets/checkout.css";
import "./stylesheets/profile.css";

import App from './App';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
