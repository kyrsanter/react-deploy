import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {NewsProvider} from "./components/context";
import NewsService from "./service/news-service";

import store from './store';
import './index.css';
import App from "./components/app/";

let newsService = new NewsService();

const app = (
    <Provider store={store}>
        <NewsProvider value={newsService}>
            <Router>
                <App />
            </Router>
        </NewsProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

