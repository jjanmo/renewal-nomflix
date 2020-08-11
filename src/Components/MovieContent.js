import React from 'react';
import styled from 'styled-components';
import Genres from 'Components/Genres';
import Actors from 'Components/Actors';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
`;
const LeftBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding-left: 5rem;
`;
const Title = styled.h1`
	font-size: 3rem;
	margin: 1rem 0;
`;
const Classification = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	font-size: 1.1rem;
	margin: 1rem 0;
`;
const Year = styled.span``;
const Adult = styled.span`
	color: '#c0392b';
`;
const Runtime = styled.span``;
const Rank = styled.span``;
const Divider = styled.span`
	margin: 0 10px;
`;
const IMDbLink = styled.a`
	line-height: 0;
`;
const IMDbLogo = styled.img`
	width: 50px;
`;
const Overview = styled.div`
	font-size: 1.2rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const Links = styled.div`
	width: 100%;
	margin-top: 1.5rem;
	display: flex;
	justify-content: left;
	align-items: center;
`;

const CollectionLink = styled(Link)`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	/* font-weight: 550; */
	font-size: 1.1rem;
	color: rgb(103, 193, 245);
	background-color: #0e151d;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	&:hover {
		background-color: #60b4e4;
		color: white;
	}
`;
const RightBox = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Poster = styled.img`
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

function MovieContent({ movie }) {
	return (
		<>
			<Container>
				<LeftBox>
					<Title>{movie.title}</Title>
					<Classification>
						<Year>
							{movie.release_date.slice(0, 4)}
							<Divider>|</Divider>
						</Year>
						{movie.adult && (
							<Adult>
								Adult
								<Divider>|</Divider>
							</Adult>
						)}
						<Runtime>
							{movie.runtime} min
							<Divider>|</Divider>
						</Runtime>
						<Genres genres={movie.genres}></Genres>
						<Rank>
							{movie.vote_average}
							<Divider>|</Divider>
						</Rank>
						<IMDbLink
							href={`https://www.imdb.com/title/${movie.imdb_id}`}
							target="_blank">
							<IMDbLogo src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png" />
						</IMDbLink>
					</Classification>
					<Overview>{movie.overview}</Overview>
					<Actors id={movie.id} isMovie={true} />
					<Links>
						{movie.belongs_to_collection && (
							<CollectionLink
								to={`/collection/${movie.belongs_to_collection.id}`}>
								{movie.belongs_to_collection.name}
							</CollectionLink>
						)}
					</Links>
				</LeftBox>
				<RightBox>
					<Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
				</RightBox>
			</Container>
		</>
	);
}

export default MovieContent;
