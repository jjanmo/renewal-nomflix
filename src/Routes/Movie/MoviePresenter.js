import React from 'react';
import Section from 'Components/Section';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Item from 'Components/Item';
import { Helmet } from 'react-helmet';

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
                    {popular.map((movie) => (
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
                    {topRated.map((movie) => (
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

export default MoviePresenter;
