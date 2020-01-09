const fetchLoading = () => {
    return {
        type: 'FETCH_LOADING_REQUEST'
    }
};

const fetchNews = (news) => {
    return {
        type: 'FETCH_NEWS_DATA',
        payload: news,
    }
};

const setLogin = (login) => {
    return {
        type: 'SET_LOGIN',
        login,
    }
};

const setPassword = (password) => {
    return {
        type: 'SET_PASSWORD',
        password,
    }
};

const loggedIn = () => {
    return {
        type: 'LOGED_IN',
    }
};

const fetchUserData = (user) => {
    return {
        type: 'FETCH_USER_DATA',
        payload: {
            id: user.id,
            name: user.name,
            image: user.image,
            birthDate: user.birthDate,
            films: user.films,
            about: user.about
        }
    }
};

export {
    fetchLoading,
    fetchNews,
    setLogin,
    setPassword,
    loggedIn,
    fetchUserData
}