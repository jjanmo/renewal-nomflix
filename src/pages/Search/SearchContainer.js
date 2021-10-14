import React from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
    state = {
        isLoading: false,
        isSubmitted: false,
        error: null,
        searchTerm: '',
        movies: [],
        TVs: [],
    };

    fetchData = async (term) => {
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
        const { searchTerm } = this.state;
        if (searchTerm) {
            this.setState({
                searchTerm: '',
            });
        } else {
            e.target.placeholder = '';
        }
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
            isSubmitted: false,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== '') {
            this.fetchData(searchTerm);
        }
        this.setState({
            isSubmitted: true,
        });
    };

    render() {
        const { isLoading, searchTerm, movies, TVs, isSubmitted } = this.state;
        return (
            <SearchPresenter
                handleFocus={this.handleFocus}
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                isLoading={isLoading}
                isSubmitted={isSubmitted}
                searchTerm={searchTerm}
                movies={movies}
                TVs={TVs}
            />
        );
    }
}
