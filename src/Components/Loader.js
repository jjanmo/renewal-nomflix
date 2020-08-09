import React from 'react';
import loader from 'assets/loader.gif';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.img``;

function Loader() {
    return (
        <Container>
            <Image src={loader} alt="loader" />
        </Container>
    );
}

export default Loader;
