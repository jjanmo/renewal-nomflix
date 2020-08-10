import React, { useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { movieApi } from 'api';
// import Item from 'Components/Item';

const Container = styled.div``;
const Title = styled.h2``;
const Overview = styled.div;
const List = styled.ul``;
const Item = styled.li``;

function Collection({ id }) {
	const [collection, setCollection] = useState([]);

	const fetchData = async () => {
		try {
			const { data: collection } = await movieApi.getCollection(id);
			setCollection(collection);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Container>
			<Title>{collection.name}</Title>
			<List>
				{collection.parts &&
					collection.parts.map((movie) => (
						<Item
							id={movie.id}
							title={movie.title}
							poster={movie.poster_path}
							rating={movie.vote_average}
							year={movie.release_date.slice(0, 4)}
							isMovie={true}>
							{movie.title}
							<Redirect to={`/movie/${movie.id}`} />
						</Item>
					))}
			</List>
		</Container>
	);
}

export default Collection;
