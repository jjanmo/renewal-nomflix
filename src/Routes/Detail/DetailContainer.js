import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			movie: null,
			tv: null,
		};
	}

	fetchData = async () => {
		const {
			location: { pathname },
			match: {
				params: { id },
			},
		} = this.props;

		try {
			if (pathname.includes('movie')) {
				const { data: movie } = await movieApi.getDetail(id);
				this.setState({
					movie,
				});
			} else {
				const { data: tv } = await tvApi.getDetail(id);
				this.setState({
					tv,
				});
			}
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
		return <DetailPresenter {...this.state} />;
	}
}
