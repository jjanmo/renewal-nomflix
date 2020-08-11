import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Stars from 'Components/Stars';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;
const PosterBox = styled.div`
	position: relative;
	margin: 10px;
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
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
const Title = styled.span`
	display: inline-block;
	width: 80%;
	position: absolute;
	top: 35%;
	word-break: break-word;
	text-align: center;
`;
const ReleasedYear = styled.span`
	position: absolute;
	bottom: 20px;
	left: 20px;
`;
const Rating = styled.span`
	position: absolute;
	bottom: 20px;
	right: 20px;
`;

function Item({ id, title, poster, rating, year, isMovie = false }) {
	return (
		<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
			<Container>
				<PosterBox>
					<Overlay />
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
