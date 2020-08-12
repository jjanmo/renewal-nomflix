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
            handleClick: null,
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
                handleClick: this.handleClick,
            });
        } catch {
            this.setState({ error: 'Can not find data...' });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    handleClick = () => {
        const { history } = this.props;
        history.goBack();
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <ActorPresenter {...this.state} />;
    }
}
