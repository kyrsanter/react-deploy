import React from 'react';
import {NewsConsumer} from "../context";

const withNewsService = (Wrapped) => {
    return (props) => {
        return (
                <NewsConsumer>
                    {
                        (newsService) => {
                            return <Wrapped {...props} newsService={newsService} />
                        }
                    }
                </NewsConsumer>
            )
    }
};

export default withNewsService;