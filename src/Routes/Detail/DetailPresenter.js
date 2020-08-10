import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import MovieContent from 'Components/MovieContent';
import TVContent from 'Components/TVContent';

const Container = styled.div`
	width: 100%;
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
	filter: blur(5px);
	z-index: -1;
	opacity: 0.6;
`;

function DetailPresenter({ isLoading, movie, tv }) {
	console.log(isLoading, movie, tv);

	return isLoading ? (
		<Loader />
	) : (
		(movie && (
			<Container>
				<Background
					backdropUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
				/>
				<MovieContent movie={movie}></MovieContent>
			</Container>
		)) ||
			(tv && (
				<Container>
					<Background
						backdropUrl={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
					/>
					<TVContent> tv={tv}</TVContent>
				</Container>
			))
	);
}

export default DetailPresenter;
