import React from 'react';
import SeasonsPresenter from './SeasonsPresenter';
import { tvApi } from 'api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            error: null,
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
                params: { id },
            },
        } = this.props;

        try {
            const { data } = await tvApi.getDetail(id);
            this.setState({
                data,
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
        return <SeasonsPresenter {...this.state} />;
    }
}
