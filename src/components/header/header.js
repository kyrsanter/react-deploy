import React from "react";
import './header.css';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Header extends React.Component {

    render() {
        let {loggedIn} = this.props;
        let loginLink = (
            <li>
                <Link to="/login">Login</Link>
            </li>
        );
        let hasLoginLink = loggedIn ? null : loginLink;
        return (
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <Link to="/">This is a logo</Link>
                    </div>
                    <nav className="nav">
                        <ul>
                            {hasLoginLink}
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    }
};


export default connect(mapStateToProps, null)(Header);