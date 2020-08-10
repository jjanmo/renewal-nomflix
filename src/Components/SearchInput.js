import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchContainer from 'Routes/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { movieApi, tvApi } from 'api';

const Form = styled.form``;

const Input = styled.input`
	width: 60%;
	height: 85%;
	background-color: #316282;
	font-size: 1rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	text-decoration: none;
	outline: none;
	margin-right: 0.7rem;
	color: #fff;
	padding: 0 1rem;
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

function SearchInput() {
	const [value, setValue] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [movies, setMovies] = useState([]);
	const [TVs, setTVs] = useState([]);

	const fetchData = async () => {
		const paredValue = encodeURIComponent(value);
		const result1 = await movieApi.search(paredValue);
		const result2 = await tvApi.search(paredValue);
		console.log(result1, result2);
	};

	const handleFocus = (e) => {
		e.target.placeholder = '';
	};

	const handleBlur = (e) => {
		const {
			target: { value },
		} = e;
		if (!value) {
			e.target.placeholder = 'search';
		}
	};

	const handleChange = (e) => {
		const {
			target: { value },
		} = e;
		console.log(value);
		setValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			target: { value },
		} = e;
		if (!value) return;
		console.log('submit');
		setIsSubmitted(true);
		console.log(isSubmitted);
	};

	useEffect(() => {
		fetchData();
	}, [isSubmitted]);

	return isSubmitted ? (
		<SearchContainer />
	) : (
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="search"
				autocomplete="off"
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
				value={value}
				maxLength="20"
			/>
			<Button>
				<FontAwesomeIcon icon={faSearch} size="lg" />
			</Button>
		</Form>
	);
}

export default SearchInput;
