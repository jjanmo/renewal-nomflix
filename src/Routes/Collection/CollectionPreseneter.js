import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Stars from 'Components/Stars';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding: 0 5rem;
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
    filter: blur(4px);
    z-index: -1;
    opacity: 0.6;
`;
const Title = styled.h1`
    font-size: 3rem;
    margin: 1rem 0;
    display: flex;
    justify-content: left;
    align-content: center;
`;
const Overview = styled.div`
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1rem 0;
    width: 90%;
`;
const List = styled.ul`
    display: flex;
    margin: 3rem 0;
    width: 90%;
    overflow: auto;
`;
const Poster = styled.div`
    background-image: url(${(props) => props.posterUrl});
    background-position: center center;
    background-repeat: repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.isExisted ? 1 : 0.3)};
`;
const Name = styled.span`
    position: absolute;
    font-size: 1.3rem;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s all ease-in-out;
`;
const Year = styled.span`
    position: absolute;
    bottom: 10px;
    left: 10px;
    transition: 0.4s all ease-in-out;
`;
const Rating = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: 0.4s all ease-in-out;
`;
const Item = styled.li`
    list-style: none;
    position: relative;
    margin: 0 1rem;
    width: 350px;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s all ease-in-out;
    &:hover ${Name} {
        opacity: 0;
    }
    &:hover ${Year} {
        opacity: 0;
    }
    &:hover ${Rating} {
        opacity: 0;
    }
`;
const Button = styled.button`
    all: unset;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color: rgb(103, 193, 245);
    background-color: #0e151d;
    padding: 0.1rem 0.5rem;
    margin-left: 1%;
    border-radius: 50%;
    text-transform: uppercase;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    &:hover {
        background-color: #60b4e4;
        color: white;
    }
`;

function CollectionPresenter({ isLoading, collection, handleClick }) {
    return isLoading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>{collection.name} | Nomflix</title>
            </Helmet>
            <Background backdropUrl={`https://image.tmdb.org/t/p/w1280/${collection.backdrop_path}`} />
            <Title>
                {collection.name} <Button onClick={handleClick}>back</Button>
            </Title>

            <Overview>{collection.overview}</Overview>
            <List>
                {collection.parts &&
                    collection.parts.map((movie, index) => (
                        <Link to={`/movie/${movie.id}`} key={index}>
                            <Item>
                                <Poster
                                    posterUrl={
                                        movie.backdrop_path
                                            ? `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`
                                            : require('../../assets/no_poster.png')
                                    }
                                    isExisted={movie.backdrop_path && true}
                                />
                                <Name>{movie.title}</Name>
                                <Year>{movie.release_date || 'Not Updated'}</Year>
                                <Rating>
                                    <Stars
                                        full={Math.floor(movie.vote_average / 2)}
                                        isNotHalf={Number.isInteger(movie.vote_average)}
                                    />
                                </Rating>
                            </Item>
                        </Link>
                    ))}
            </List>
        </Container>
    );
}
export default CollectionPresenter;
