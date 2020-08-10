import React from 'react';
import styled from 'styled-components';
import Genres from 'Components/Genres';
import Actors from 'Components/Actors';
import Collection from 'Components/Collection';

const Container = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
`;

const LeftBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding-left: 7rem;
	line-height: 1.5rem;
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

const Title = styled.div`
	font-size: 3rem;
	height: 100px;
	word-break: keep-all;
	line-height: 3rem;
`;
const Classification = styled.div`
	display: flex;
	font-size: 1.2rem;
`;
const Overview = styled.div`
	font-size: 1.2rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const Divider = styled.span`
	margin: 0 10px;
`;
const Year = styled.span``;
const Adult = styled.span`
	color: '#c0392b';
`;
const Runtime = styled.span``;
const Rank = styled.span``;

const IMDbLink = styled.a`
	line-height: 0;
`;
const IMDbLogo = styled.img`
	width: 50px;
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
				</LeftBox>
				<RightBox>
					<Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
				</RightBox>
			</Container>
			<Collection />
		</>
	);
}

export default MovieContent;
