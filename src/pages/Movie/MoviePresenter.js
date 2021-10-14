import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Loader from 'components/Loader';
import Item from 'components/Item';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Container = styled.div``;

function MoviePresenter({ isLoading, popular, topRated }) {
  return isLoading ? (
    <>
      <Loader />
      <Helmet>
        <title>Movie | Nomflix</title>
      </Helmet>
    </>
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Item
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date.slice(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Movies">
          {topRated.map(movie => (
            <Item
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date.slice(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
    </Container>
  );
}

MoviePresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      isMovie: PropTypes.bool,
    })
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      isMovie: PropTypes.bool,
    })
  ),
};

export default MoviePresenter;
