import React from 'react';
import MoviePresenter from './MoviePresenter';
import { movieApi } from 'api';

export default class extends React.Component {
    state = {
        popular: [],
        topRated: [],
        isLoading: true,
        error: null,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: popular },
            } = await movieApi.popular();
            const {
                data: { results: topRated },
            } = await movieApi.topRated();
            this.setState({
                popular,
                topRated,
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
        const { isLoading, popular, topRated } = this.state;
        return <MoviePresenter isLoading={isLoading} popular={popular} topRated={topRated} />;
    }
}
