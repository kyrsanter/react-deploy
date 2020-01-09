let initialState = {
    news: [],
    loading: true,
    loggedIn: false,
    password: '',
    login: '',
    user: {
        id: '',
        name: '',
        image: '',
        birthDate: '',
        films: [],
        about: ''
    }
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'FETCH_LOADING_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_NEWS_DATA':
            return {
                ...state,
                loading: false,
                news: action.payload,
            };
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.login,
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password,
            };
        case 'LOGED_IN':
            return {
                ...state,
                loggedIn: true,
            };
        case 'FETCH_USER_DATA':
            return {
                ...state,
                loading: false,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.image,
                    birthDate: action.payload.birthDate,
                    films: action.payload.films,
                    about: action.payload.about
                }
            };
        default:
            return state;
    }
};

export default reducer;