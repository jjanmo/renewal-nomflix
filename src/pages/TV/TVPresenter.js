import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Loader from 'components/Loader';
import Item from 'components/Item';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Container = styled.div``;

function TVPresenter({ isLoading, popular, topRated, onTheAir }) {
  return isLoading ? (
    <>
      <Loader />
      <Helmet>
        <title>TV | Nomflix</title>
      </Helmet>
    </>
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="Popular TVs">
          {popular.map(tv => (
            <Item
              key={tv.id}
              id={tv.id}
              title={tv.name}
              poster={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated TVs">
          {topRated.map(tv => (
            <Item
              key={tv.id}
              id={tv.id}
              title={tv.name}
              poster={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Section>
      )}
      {onTheAir && onTheAir.length > 0 && (
        <Section title="TVs On The Air 7days">
          {onTheAir.map(tv => (
            <Item
              key={tv.id}
              id={tv.id}
              title={tv.name}
              poster={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Section>
      )}
    </Container>
  );
}

TVPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      first_air_date: PropTypes.string,
    })
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      first_air_date: PropTypes.string,
    })
  ),
  onTheAir: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      first_air_date: PropTypes.string,
    })
  ),
};

export default TVPresenter;
