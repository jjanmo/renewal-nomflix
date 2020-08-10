import React from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
	state = {
		isLoading: false,
		error: null,
		searchTerm: '',
		movies: [],
		TVs: [],
	};

	fetchData = async (term) => {
		console.log(term);
		this.setState({ isLoading: true });
		try {
			const {
				data: { results: movies },
			} = await movieApi.search(term);
			const {
				data: { results: TVs },
			} = await tvApi.search(term);
			this.setState({
				movies,
				TVs,
			});
			console.log(movies, TVs);
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

	handleFocus = (e) => {
		e.target.placeholder = '';
	};

	handleBlur = (e) => {
		const {
			target: { value },
		} = e;
		if (!value) {
			e.target.placeholder = 'search';
		}
	};

	handleChange = (e) => {
		const {
			target: { value },
		} = e;
		this.setState({
			searchTerm: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.fetchData(searchTerm);
		}
	};

	render() {
		const { isLoading, searchTerm, movies, TVs } = this.state;
		return (
			<SearchPresenter
				handleFocus={this.handleFocus}
				handleBlur={this.handleBlur}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				isLoading={isLoading}
				searchTerm={searchTerm}
				movies={movies}
				TVs={TVs}
			/>
		);
	}
}
