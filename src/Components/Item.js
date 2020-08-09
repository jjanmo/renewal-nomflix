import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Poster = styled.img`
    border-radius: 5px;
    width: 80%;
`;
const Title = styled.span``;
const Rating = styled.span``;
const ReleasedYear = styled.span``;

function Item({ id, title, poster, rating, isMovie = false, year }) {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
                <Poster src={`https://image.tmdb.org/t/p/w200/${poster}`} />
                <Title>{title}</Title>
                <ReleasedYear>{year}</ReleasedYear>
                <Rating>{rating}</Rating>
            </Container>
        </Link>
    );
}

export default Item;
