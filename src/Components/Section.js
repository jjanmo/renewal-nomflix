import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h2`
	font-size: 3rem;
	margin: 1rem 0 2rem;
	text-align: center;
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
