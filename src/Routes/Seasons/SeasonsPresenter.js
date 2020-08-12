import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: center;
    padding-left: 5rem;
    margin-bottom: 2rem;
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
    z-index: 1;
    display: flex;
    align-items: center;
`;
const Overview = styled.div`
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1rem 0;
    width: 90%;
`;
const List = styled.ul`
    display: flex;
    margin: 1rem 0 0;
    width: 90%;
    overflow: auto;
    padding: 1rem 0;
`;
const SLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
`;
const TopBox = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.2rem 0.4rem;
    width: 95%;
    margin-bottom: 0.5rem;
    border-radius: 5px;
`;
const Name = styled.span`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Year = styled.div``;
const Episode = styled.div``;
const Item = styled.li`
    list-style: none;
    position: relative;
    margin: 0 1rem;
    width: 200px;
    height: 300px;
    border-radius: 5px;
    overflow: hidden;
`;
const Button = styled.button`
    all: unset;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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

function SeasonsPresenter({ isLoading, data, handleClick }) {
    return isLoading ? (
        <Loader />
    ) : (
        <Container>
            <Background backdropUrl={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} />
            <Title>
                {data.name}
                <Button onClick={handleClick}>back</Button>
            </Title>
            <Overview>{data.overview}</Overview>
            <List>
                {data.seasons &&
                    data.seasons.map((season, index) => (
                        <SLink to={`/seasons/${data.id}/${season.season_number}`} key={index}>
                            <TopBox>
                                <Name>{season.name}</Name>
                                <Row>
                                    <Year>{season.air_date}</Year>
                                    <Episode>Episode : {season.episode_count}</Episode>
                                </Row>
                            </TopBox>
                            <Item>
                                <Poster posterUrl={`https://image.tmdb.org/t/p/w200${season.poster_path || data.poster_path}`} />
                            </Item>
                        </SLink>
                    ))}
            </List>
        </Container>
    );
}

export default SeasonsPresenter;
