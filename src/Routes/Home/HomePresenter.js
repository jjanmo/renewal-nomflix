import React from 'react';
import Section from 'Components/Section';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Item from 'Components/Item';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Container = styled.div``;

function HomePresenter({ isLoading, nowPlaying, upcoming, airingToday }) {
    return isLoading ? (
        <>
            <Helmet>
                <title>Home | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>Home | Nomflix</title>
            </Helmet>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing Movies">
                    {nowPlaying.map((movie) => (
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
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    {upcoming.map((movie) => (
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
            {airingToday && airingToday.length > 0 && (
                <Section title="Today Airing TVs">
                    {airingToday.map((tv) => (
                        <Item
                            key={tv.id}
                            id={tv.id}
                            title={tv.name}
                            poster={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date.slice(0, 4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}
        </Container>
    );
}

HomePresenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
            release_date: PropTypes.string,
            isMovie: PropTypes.bool,
        })
    ),
    upcoming: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
            release_date: PropTypes.string,
            isMovie: PropTypes.bool,
        })
    ),
    airingToday: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
            first_air_date: PropTypes.string,
            isMovie: PropTypes.bool,
        })
    ),
};

export default HomePresenter;
