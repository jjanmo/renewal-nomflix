import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Item from 'Components/Item';

const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 2rem;
`;

const Input = styled.input`
	width: 50%;
	background-color: rgba(49, 98, 130, 0.7);
	font-size: 2rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	text-decoration: none;
	outline: none;
	/* margin-right: 0.7rem; */
	color: #fff;
	/* padding: 1rem 0; */
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 1rem;
	border-radius: 5px;
	box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
	&::placeholder {
		color: rgba(255, 255, 255, 0.8);
		font-family: inherit;
		font-size: 1.1rem;
		text-align: center;
		text-transform: uppercase;
	}
	&:hover {
		box-shadow: 0 0 0 1px #b2bec3;
	}
`;

const Button = styled.button`
	all: unset;
	cursor: pointer;
	color: rgba(255, 255, 255, 0.6);
	&:hover {
		color: rgba(255, 255, 255, 0.8);
	}
`;

const Container = styled.div``;

function SearchPresenter({
	handleFocus,
	handleBlur,
	handleChange,
	handleSubmit,
	isLoading,
	searchTerm,
	movies,
	TVs,
}) {
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="search"
					autocomplete="off"
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={handleChange}
					maxLength="40"
				/>
				<Button>
					<FontAwesomeIcon icon={faSearch} size="lg" />
				</Button>
			</Form>
			{isLoading ? (
				<Loader />
			) : (
				<Container>
					{movies && movies.length > 0 && (
						<Section title="Movies">
							{movies.map((movie) => (
								<Item
									key={movie.id}
									id={movie.id}
									title={movie.title}
									poster={movie.poster_path}
									rating={movie.vote_average}
									year={movie.release_date.slice(0, 4)}
									isMovie
								/>
							))}
						</Section>
					)}
					{TVs && TVs.length > 0 && (
						<Section title="TVs">
							{TVs.map((tv) => (
								<Item
									key={tv.id}
									id={tv.id}
									title={tv.name}
									poster={tv.poster_path}
									rating={tv.vote_average}
									year={tv.first_air_date.slice(0, 4)}
									isMovie={false}
								/>
							))}
						</Section>
					)}
				</Container>
			)}
		</>
	);
}
export default SearchPresenter;
