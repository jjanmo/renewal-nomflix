import React from 'react';
import Section from 'Components/Section';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Item from 'Components/Item';

const Container = styled.div`
    margin: 10px 0;
`;

function TVPresenter({ isLoading, popular, topRated, onTheAir }) {
    return isLoading ? (
        <Loader />
    ) : (
        <Container>
            {popular && popular.length > 0 && (
                <Section title="Popular TVs">
                    {popular.map((tv) => (
                        <Item key={tv.id} id={tv.id} title={tv.name} poster={tv.poster_path} rating={tv.vote_average} />
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated TVs">
                    {topRated.map((tv) => (
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
                    {onTheAir.map((tv) => (
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

export default TVPresenter;
