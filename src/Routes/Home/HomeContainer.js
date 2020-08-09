import React from 'react';
import HomePresenter from './HomePresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
    state = {
        nowPlaying: [],
        upcoming: [],
        airingToday: [],
        isLoading: true,
        error: null,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying },
            } = await movieApi.nowPlaying();
            const {
                data: { results: upcoming },
            } = await movieApi.upcoming();
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();
            this.setState({
                nowPlaying,
                upcoming,
                airingToday,
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
        const { isLoading, nowPlaying, upcoming, airingToday } = this.state;
        return <HomePresenter isLoading={isLoading} nowPlaying={nowPlaying} upcoming={upcoming} airingToday={airingToday} />;
    }
}
