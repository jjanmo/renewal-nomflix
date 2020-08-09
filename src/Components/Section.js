import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0; */
`;
const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 2rem;
`;
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin-bottom: 1rem;
`;

function Section({ title, children }) {
    return (
        <Container>
            <Title>{title}</Title>
            <List>{children}</List>
        </Container>
    );
}

export default Section;
