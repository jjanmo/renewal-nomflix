import React from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

export default class extends React.Component {
    state = {
        popular: [],
        topRated: [],
        onTheAir: [],
        isLoading: true,
        error: null,
    };

    getDate = async (id) => {
        const {
            data: { last_air_date },
        } = await tvApi.getDetail(id);
        return last_air_date;
    };

    async componentDidMount() {
        try {
            const {
                data: { results: popular },
            } = await tvApi.popular();
            const {
                data: { results: topRated },
            } = await tvApi.topRated();
            const {
                data: { results: onTheAir },
            } = await tvApi.onTheAir();
            this.setState({
                popular,
                topRated,
                onTheAir,
            });
        } catch {
            this.setState({
                error: 'Can not find data...',
            });
        } finally {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        return <TVPresenter {...this.state} />;
    }
}
