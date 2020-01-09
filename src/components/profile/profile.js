import React from 'react';
import './profile.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import withNewsService from "../hoc/withNewsService";
import {fetchLoading, fetchUserData} from "../../actions";
import Preloader from "../preloader";


class Profile extends React.Component {

    componentDidMount() {
        let {newsService, getUserData, fetchLoad, loggedIn} = this.props;
        if (!loggedIn) {
            this.props.history.push('/login');
        }
        fetchLoad();
        newsService.getUserInfo()
            .then( (data) => {
                getUserData(data);
            })
    }

    render() {
        let {loading, userData} = this.props;
        if (loading) {
            return <Preloader/>
        }
        return (
            <section className="profile">
                <div className="container">
                    <div className="profile-photo">
                        <img src={`${process.env.PUBLIC_URL}images/${userData.image}`} alt=""/>
                    </div>
                    <div className="profile-info">
                        <h1>Имя: {userData.name}</h1>
                        <div className="line"></div>
                        <h3>Дата рождения: {userData.birthDate}</h3>
                        <div className="line"></div>
                        <p>Фильмография:</p>
                        <ul>
                            {
                                userData.films.map((film, i) =>{
                                    return (
                                        <li key={i}>
                                            {film}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="line"></div>
                        <p>{userData.about}</p>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        userData: state.user,
        loggedIn: state.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoad: () => {
            return dispatch(fetchLoading())
        },
        getUserData: (user) => {
            return dispatch(fetchUserData(user))
        }
    }
};

export default withRouter(withNewsService(connect(mapStateToProps, mapDispatchToProps)(Profile)));