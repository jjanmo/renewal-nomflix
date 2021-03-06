import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import MovieContent from 'Components/MovieContent';
import TVContent from 'Components/TVContent';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 100%;
`;
const Background = styled.div`
	background-image: url(${(props) => props.backdropUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(4px);
	z-index: -1;
	opacity: 0.6;
`;

function DetailPresenter({ isLoading, movie, tv, imdbId }) {
	return isLoading ? (
		<>
			<Loader />
			<Helmet>
				<title>Loading | Nomflix</title>
			</Helmet>
		</>
	) : (
		(movie && (
			<Container>
				<Helmet>
					<title>{movie.title} | Nomflix</title>
				</Helmet>
				<Background
					backdropUrl={
						movie.backdrop_path
							? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
							: ''
					}
				/>
				<MovieContent movie={movie} />
			</Container>
		)) ||
			(tv && (
				<Container>
					<Helmet>
						<title>{tv.name} | Nomflix</title>
					</Helmet>
					<Background
						backdropUrl={
							tv.backdrop_path
								? `https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}`
								: ''
						}
					/>
					<TVContent tv={tv} imdbId={imdbId} />
				</Container>
			))
	);
}

DetailPresenter.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	movie: PropTypes.shape({
		title: PropTypes.string,
		backdrop_path: PropTypes.string,
	}),
	tv: PropTypes.shape({
		name: PropTypes.string,
		backdrop_path: PropTypes.string,
	}),
	imdbId: PropTypes.string,
};

export default DetailPresenter;
