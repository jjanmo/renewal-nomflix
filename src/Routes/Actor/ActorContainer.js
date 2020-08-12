import React from 'react';
import ActorPresenter from './ActorPresenter';
import { commonApi } from 'api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actor: null,
            isLoading: true,
            error: null,
        };
    }

    fetchData = async () => {
        const {
            match: {
                params: { id },
            },
        } = this.props;
        try {
            const { data: actor } = await commonApi.getActor(id);
            this.setState({
                actor,
            });
        } catch {
            this.setState({ error: 'Can not find data...' });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <ActorPresenter {...this.state} />;
    }
}
