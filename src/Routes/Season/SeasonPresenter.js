import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Helmet } from 'react-helmet';
import Episodes from 'Components/Episodes';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 2rem 1rem;
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
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;
const Name = styled.span``;
const SeasonNumber = styled.span`
    display: inline-block;
    color: #1381c8;
    font-size: 2.5rem;
    margin-left: 0.5rem;
`;
const SubTitle = styled.span`
    font-size: 2rem;
    color: #eee;
    font-style: italic;
    margin: 0.5rem 0;
`;
const Overview = styled.div`
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 1rem;
`;
const Button = styled.button`
    display: inline-block;
    all: unset;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transform: translateY(-20%);
    font-size: 1rem;
    color: rgb(103, 193, 245);
    background-color: #0e151d;
    padding: 0.5rem 1rem;
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
const EpisodeContainer = styled.div``;

function SeasonPresenter({ isLoading, season, name, originalName, backdropUrl, handleClick }) {
    return isLoading ? (
        <>
            <Loader />
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
        </>
    ) : (
        <Container>
            <Helmet>
                <title>{name} | Nomflix</title>
            </Helmet>
            <Background backdropUrl={backdropUrl} />
            <Title>
                <Name>
                    {name}{' '}
                    <SeasonNumber>{season.season_number === 0 ? 'Specials' : `Season ${season.season_number}`}</SeasonNumber>
                    <Button onClick={handleClick}>back</Button>
                </Name>
                <SubTitle>{name && originalName === name ? '' : `( ${originalName} )`}</SubTitle>
            </Title>
            <Overview>{`${season.overview}` || 'Overview Not Updated'}</Overview>
            <EpisodeContainer>
                {season.episodes && season.episodes.length > 0 && <Episodes episodes={season.episodes} />}
            </EpisodeContainer>
        </Container>
    );
}

export default SeasonPresenter;
