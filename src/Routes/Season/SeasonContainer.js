import React from 'react';
import SeasonPresenter from './SeasonPresenter';
import { tvApi } from 'api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            season: null,
            handleClick: null,
        };
    }

    handleClick = () => {
        const { history } = this.props;
        history.goBack();
    };

    fetchData = async () => {
        const {
            match: {
                params: { id, season: seasonNumber },
            },
        } = this.props;

        try {
            const { data: season } = await tvApi.getSeason(id, seasonNumber);
            this.setState({
                season,
                handleClick: this.handleClick,
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
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {
            location: { state },
        } = this.props;
        return <SeasonPresenter {...this.state} {...state} />;
    }
}
