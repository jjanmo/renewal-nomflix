import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Stars from 'Components/Stars';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-content: center;
	padding-left: 5rem;
`;
const Background = styled.div`
	background-image: url(${(props) => props.backdropUrl});
	background-position: center center;
	background-repeat: repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(4px);
	z-index: -1;
	opacity: 0.6;
`;
const Title = styled.h1`
	font-size: 3rem;
	margin: 1rem 0;
`;
const Overview = styled.div`
	font-size: 1.2rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	margin: 1rem 0;
`;
const List = styled.ul`
	display: flex;
	margin: 3rem 0;
	width: 90%;
	overflow-y: auto;
	overflow-x: visible;
`;
const Poster = styled.div`
	background-image: url(${(props) => props.posterUrl});
	background-position: center center;
	background-repeat: repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const Name = styled.span`
	position: absolute;
	font-size: 1.3rem;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	transition: 0.4s all ease-in-out;
`;
const Year = styled.span`
	position: absolute;
	bottom: 10px;
	left: 10px;
	transition: 0.4s all ease-in-out;
	text-transform: uppercase;
`;
const Rating = styled.span`
	position: absolute;
	bottom: 10px;
	right: 10px;
	transition: 0.4s all ease-in-out;
`;
const Item = styled.li`
	list-style: none;
	position: relative;
	margin: 0 1rem;
	width: 350px;
	height: 250px;
	border-radius: 5px;
	overflow: hidden;
	transition: 0.3s all ease-in-out;
	&:hover ${Name} {
		opacity: 0;
	}
	&:hover ${Year} {
		opacity: 0;
	}
	&:hover ${Rating} {
		opacity: 0;
	}
`;

function CollectionPresenter({ isLoading, collection }) {
	console.log(isLoading, collection);
	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<Background
				backdropUrl={`https://image.tmdb.org/t/p/w1280/${collection.backdrop_path}`}
			/>
			<Title>{collection.name}</Title>
			<Overview>{collection.overview}</Overview>
			<List>
				{collection.parts &&
					collection.parts.map((movie, index) => (
						<Link to={`/movie/${movie.id}`} key={index}>
							<Item>
								<Poster
									posterUrl={`https://image.tmdb.org/t/p/w400${
										movie.backdrop_path || movie.poster_path
									}`}
								/>
								<Name>{movie.title}</Name>
								<Year>{movie.release_date || 'not released'}</Year>
								<Rating>
									<Stars
										full={Math.floor(movie.vote_average / 2)}
										isNotHalf={Number.isInteger(movie.vote_average)}
									/>
								</Rating>
							</Item>
						</Link>
					))}
			</List>
		</Container>
	);
}
export default CollectionPresenter;
