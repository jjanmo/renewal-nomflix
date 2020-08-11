import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Stars from 'Components/Stars';

const PosterBox = styled.div`
	position: relative;
	margin: 10px;
`;
const Poster = styled.div`
	border-radius: 5px;
	background-image: url(${(props) => props.posterUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 150px;
	height: 200px;
	opacity: 0.3;
	filter: blur(0.5px);
	transition: 0.3s all ease-in-out;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Title = styled.span`
	display: inline-block;
	width: 80%;
	position: absolute;
	top: 35%;
	word-break: break-word;
	text-align: center;
	font-size: 1.2rem;
	transition: 0.3s top ease-in-out, 0.3s opacity ease-in-out 0.2s;
`;
const ReleasedYear = styled.span`
	position: absolute;
	bottom: 20px;
	left: 20px;
	transition: 0.3s opacity ease-in-out;
`;
const Rating = styled.span`
	position: absolute;
	bottom: 20px;
	right: 20px;
	transition: 0.3s opacity ease-in-out;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 0.5rem 0;
	&:hover ${Poster} {
		opacity: 1;
		filter: blur(0);
		transform: scale(1.06);
	}
	&:hover ${Title} {
		top: -7%;
		opacity: 0;
	}
	&:hover ${Rating} {
		opacity: 0;
	}
	&:hover ${ReleasedYear} {
		opacity: 0;
	}
`;

function Item({ id, title, poster, rating, year, isMovie = false }) {
	return (
		<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
			<Container>
				<PosterBox>
					<Poster
						posterUrl={
							poster
								? `https://image.tmdb.org/t/p/w200/${poster}`
								: require('../assets/no_poster.png')
						}
					/>
				</PosterBox>
				<Title>{title}</Title>
				<ReleasedYear>{year}</ReleasedYear>
				<Rating>
					<Stars
						rating={rating}
						full={Math.floor(rating / 2)}
						isNotHalf={Number.isInteger(rating)}
					/>
				</Rating>
			</Container>
		</Link>
	);
}

export default Item;
