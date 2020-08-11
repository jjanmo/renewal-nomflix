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
		};
	}

	fetchData = async () => {
		const {
			match: {
				params: { id },
			},
		} = this.props;

		try {
			const { data: collection } = await movieApi.getCollection(id);
			// const sortedCollection =
			// 	collection &&
			// 	collection.overview.parts.sort(
			// 		(a, b) => a.release_date.slice(0, 4) - b.release_date.slice(0, 4)
			// 	);
			this.setState({
				collection,
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
		const { isLoading, collection } = this.state;
		return (
			<CollectionPresenter isLoading={isLoading} collection={collection} />
		);
	}
}
