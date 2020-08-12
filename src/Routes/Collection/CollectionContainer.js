import React from 'react';
import CollectionPresenter from './CollectionPreseneter';
import { movieApi } from 'api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: [],
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
            const { data: collection } = await movieApi.getCollection(id);
            this.setState({
                collection,
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
        return <CollectionPresenter {...this.state} />;
    }
}
