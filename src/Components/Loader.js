import React from 'react';
import loader from 'assets/loader.gif';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
`;

const Image = styled.img``;

function Loader() {
	return (
		<Container>
			<Image src={loader} />
		</Container>
	);
}

export default Loader;
