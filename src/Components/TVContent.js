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
	font-size: 3.5rem;
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
const Runtime = styled.span``;
const Rank = styled.span``;
const Divider = styled.span`
	margin: 0 10px;
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

const SeasonsLink = styled(Link)`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
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
const Poster = styled.div`
	border-radius: 5px;
	background-image: url(${(props) => props.posterUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	@media (max-width: 1440px) {
		width: 400px;
		height: 600px;
	}
	@media (min-width: 1441px) {
		width: 460px;
		height: 680px;
	}
`;

function TVContent({ tv }) {
	console.log(tv);
	return (
		<>
			<Container>
				<LeftBox>
					<Title>{tv.original_name}</Title>
					<Classification>
						<Year>
							{`${tv.first_air_date.slice(0, 4)} ~ ${tv.last_air_date.slice(
								0,
								4
							)}`}
							<Divider>|</Divider>
						</Year>
						<Runtime>
							{tv.episode_run_time} min
							<Divider>|</Divider>
						</Runtime>
						<Genres genres={tv.genres}></Genres>
						<Rank>
							{tv.vote_average}
							<Divider>|</Divider>
						</Rank>
					</Classification>
					<Overview>{tv.overview}</Overview>
					<Actors id={tv.id} />
					<Links>
						{tv.seasons && (
							<SeasonsLink to={`/seasons/${tv.id}`} seasons={tv.seasons}>
								Seasons
							</SeasonsLink>
						)}
					</Links>
				</LeftBox>
				<RightBox>
					<Poster
						posterUrl={`https://image.tmdb.org/t/p/w400${tv.poster_path}`}
					/>
				</RightBox>
			</Container>
		</>
	);
}

export default TVContent;
