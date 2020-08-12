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
        };
    }

    fetchData = async () => {
        const {
            match: {
                params: { id, season: seasonNumber },
            },
        } = this.props;

        try {
            const { data } = await tvApi.getSeason(id, seasonNumber);
            console.log(data);
            // this.setState({
            //     movie,
            // });
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
        return <SeasonPresenter {...this.state} />;
    }
}
