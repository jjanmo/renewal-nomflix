import React from 'react';
import Iframe from 'react-iframe';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 550;
    font-size: 1.2rem;
    color: #eee;
    margin-bottom: 0.5rem;
`;
const List = styled.ul`
    display: flex;
    overflow: auto;
`;
const Item = styled.li`
    margin: 0.5rem;
`;
const Name = styled.div`
    margin-bottom: 0.5rem;
    text-overflow: ellipsis;
    width: 420px;
    overflow: hidden;
    white-space: nowrap;
`;

function Videos({ videos }) {
    return (
        videos &&
        videos.length > 0 && (
            <Container>
                <Title>videos</Title>
                <List>
                    {videos.map((video, index) => (
                        <Item key={index}>
                            <Name>{video.name}</Name>
                            <Iframe src={`https://youtube.com/embed/${video.key}`} width="400" height="250" />
                        </Item>
                    ))}
                </List>
            </Container>
        )
    );
}

export default Videos;
