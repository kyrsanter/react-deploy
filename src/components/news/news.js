import React from "react";
import './news.css';

import withNewsService from "../hoc/withNewsService";
import {connect} from "react-redux";
import {fetchNews, fetchLoading} from "../../actions";
import Preloader from "../preloader";
import {withRouter} from 'react-router-dom';


class News extends React.Component {
    componentDidMount() {
        let {newsService, fetchNew, fetchLoad} = this.props;
        fetchLoad();
        newsService.getNews()
            .then( data => {
                fetchNew(data);
            })
    }

    showNewsDetails = (id) => {
        let {history} = this.props;
        history.push(`/news/${id}`);
    };

    render() {
        let {loading, news} = this.props;
        if (loading) {
            return <Preloader/>
        }
        return (
            <section className="news">
                <div className="container">
                    {
                        news.map( item => {
                            return (
                                <div key={item.id} className="new-item">
                                    <img src={`${process.env.PUBLIC_URL}${item.image}`} alt=""/>
                                    <div className="text-block">
                                        <h3>{item.article}</h3>
                                        <br/>
                                        <p>{item.shortDescription}</p>
                                    </div>
                                    <button onClick={() => this.showNewsDetails(item.id)}>Подробнее</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news,
        loading: state.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoad: () => {
            return dispatch(fetchLoading())
        },
        fetchNew: (news) => {
            return dispatch(fetchNews(news))
        }
    }
};

export default withRouter(withNewsService(connect(mapStateToProps, mapDispatchToProps)(News)));