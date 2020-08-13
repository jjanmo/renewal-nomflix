import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rank from 'Components/Rank';

const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 550;
    font-size: 1.4rem;
    color: #eee;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;
const List = styled.ul`
    width: 100%;
    margin: 0 auto;
    color: #2c3e50;
    height: 50vh;
    overflow: auto;
`;
const PosterList = styled.ul`
    width: 100%;
    height: 100%;
    position: relative;
    /* background-color: rgba(0, 0, 0, 0.4); */
`;
const Item = styled.li`
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 10px;
    width: 95%;
    cursor: pointer;
    transition: 0.3s background-color ease-in-out;
    /* background-color: #eee; */
    background-color: ${(props) => (props.isClicked ? '#70a1ff' : '#eee')};
    /* console.log(props.isClicked);
        return props.isClicked ? '#70a1ff' : '#eee';
    }}; */
`;
const EpisodeTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;
`;
const EpisodeNumber = styled.span`
    color: #27ae60;
    margin-right: 0.3rem;
`;
const Name = styled.span`
    color: #2980b9;
    font-size: 1.3rem;
`;
const Date = styled.span`
    color: #34495e;
    font-size: 1rem;
    opacity: 0.8;
`;
const Overview = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    margin: 0.5rem 0;
    color: black;
`;
const StillShot = styled.div`
    background-image: url(${(props) => props.stillShotPoster});
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center center;
    /* opacity: ${(props) => (props.isExisted ? 1 : 0.5)}; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    transition: 0.3s background-color ease-in-out;
    overflow:hidden;
    background-color: rgba(0,0,0,0.4);
`;
const Order = styled.span`
    position: absolute;
    color: #636e72;
    bottom: 2%;
    left: 0;
    transform: translate(-50%, -50%);
    font-size: 1.1rem;
    font-weight: 600;
`;
function Episodes({ episodes }) {
    console.log(episodes);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stillShots, setStillShots] = useState({});
    const [target, setTarget] = useState(null);

    const handleClick = (e) => {
        e.stopPropagation();
        const { currentTarget } = e;
        // currentTarget.style.backgroundColor = '#70a1ff';
        const _index = currentTarget.dataset.index;
        setCurrentIndex(_index);
        setTarget(currentTarget);
        currentTarget.style.backgroundColor = '#70a1ff';

        // setBackgroundColor('#70a1ff');
    };

    const getStillShots = () => episodes.map((episode) => episode.still_path || null);

    useEffect(() => {
        setStillShots(getStillShots());
    }, [currentIndex]);

    return (
        episodes &&
        episodes.length > 0 && (
            <>
                {console.log(stillShots)}
                <Title>epsoide</Title>
                <Container>
                    <List>
                        {episodes.map((episode, index) => (
                            <Item key={episode.id} data-index={index} onClick={handleClick}>
                                <EpisodeTitle>
                                    <EpisodeNumber>{`Episode${episode.episode_number}`}</EpisodeNumber>{' '}
                                    <Name>{episode.name}</Name>
                                    <Date>{episode.air_date || 'Not Updated'}</Date>
                                </EpisodeTitle>
                                <Rank score={episode.vote_average} totalVotes={episode.vote_count} />
                                <Overview>{episode.overview}</Overview>
                            </Item>
                        ))}
                    </List>
                    <PosterList>
                        <StillShot
                            stillShotPoster={
                                stillShots[currentIndex]
                                    ? `https://image.tmdb.org/t/p/w500${stillShots[currentIndex]}`
                                    : require('../assets/no_poster.png')
                            }
                            // isExisted={episode.still_path && true}
                        >
                            {/* <Order>{`S${episode.season_number} E${episode.episode_number}`}</Order> */}
                        </StillShot>
                    </PosterList>
                </Container>
            </>
        )
    );
}

export default Episodes;
