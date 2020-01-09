import React from "react";
import './login.css'

import {connect} from "react-redux";
import withNewsService from "../hoc/withNewsService";
import {setLogin, setPassword, loggedIn} from "../../actions";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    onLoginInput = (e) => {
        let {setLogin} = this.props;
        setLogin(e.target.value);
    };

    onPassInput = (e) => {
        let {setPass} = this.props;
        setPass(e.target.value);
    };

    sendForm = (e) => {
        e.preventDefault();
        let {password, login, newsService, history, onLoggedIn} = this.props;
        newsService.checkUserData(login, password)
            .then(data => {
                onLoggedIn();
                history.push('/');
            })
            .catch(err => {
                alert(err)
            })
    };


    render() {
        return (
            <section className="login">
                <div className="container">
                    <div className="login-form">
                        <form action="" onSubmit={this.sendForm}>
                            <h1>LOGIN FORM</h1>
                            <label htmlFor="login">Введите свой логин</label>
                            <input
                                type="text"
                                name="login"
                                id="login"
                                onChange={this.onLoginInput}/>
                            <label htmlFor="pass">Введите свой пароль</label>
                            <input
                                type="password"
                                name="pass"
                                id="pass"
                                onChange={this.onPassInput}/>
                            <button>Войти</button>
                        </form>
                    </div>
                </div>
                <div className="hint">
                    /*Admin*/ <br/>
                    /*12345*/
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (login) => {
            return dispatch(setLogin(login));
        },
        setPass: (pass) => {
            return dispatch(setPassword(pass));
        },
        onLoggedIn: () => {
            return dispatch(loggedIn())
        }
    }
};

export default withRouter(withNewsService(connect(mapStateToProps, mapDispatchToProps)(Login)));