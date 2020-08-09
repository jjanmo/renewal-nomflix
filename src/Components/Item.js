import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Poster = styled.div`
    border-radius: 5px;
    background: url(${(props) => `https://image.tmdb.org/t/p/w200/${props.poster}`}) center center / cover no-repeat;
    /* padding-top: calc (300 / 200 * 100); */
    width: 180px;
    height: 270px;
`;
const Title = styled.span``;
const Rating = styled.span``;
const ReleasedYear = styled.span``;

function Item({ id, title, poster, rating, isMovie = false, year }) {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
                <Poster poster={poster} />
                <Title>{title}</Title>
                <ReleasedYear>{year}</ReleasedYear>
                <Rating>{rating}</Rating>
            </Container>
        </Link>
    );
}

export default Item;
