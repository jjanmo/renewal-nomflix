import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Poster = styled.div`
	border-radius: 5px;
	background-image: url(${(props) => props.posterUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 150px;
	height: 200px;
`;
const Title = styled.span``;
const Rating = styled.span``;
const ReleasedYear = styled.span``;

function Item({ id, title, poster, rating, year, isMovie = false }) {
	return (
		<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
			<Container>
				<Poster
					posterUrl={
						poster
							? `https://image.tmdb.org/t/p/w200/${poster}`
							: require('../assets/no_poster.png')
					}
				/>
				<Title>{title}</Title>
				<ReleasedYear>{year}</ReleasedYear>
				<Rating>{rating}</Rating>
			</Container>
		</Link>
	);
}

export default Item;
