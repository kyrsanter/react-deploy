import React from "react";
import {Switch, Route} from 'react-router-dom';

import Header from "../header";

import Home from "../home";
import News from "../news/";
import Login from "../login";
import Profile from "../profile";
import NewsDetails from "../newsdetails";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route
                    path="/"
                    render={() => <Home/>}
                    exact/>
                <Route
                    path="/login"
                    render={() => <Login />}
                    exact />
                <Route
                    path="/news/"
                    render={() => <News />}
                    exact />
                <Route
                    path="/news/:id"
                    render={({match}) => <NewsDetails item={match.params.id}/>}
                    exact/>
                <Route
                    path="/profile"
                    render={() => <Profile />}
                    exact />
            </Switch>
        </React.Fragment>
    )
};

export default App;