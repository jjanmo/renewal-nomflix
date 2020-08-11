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
	margin-bottom: 1rem;
	@media (max-width: 1440px) {
		grid-template-columns: repeat(7, 1fr);
	}
	@media (min-width: 1441px) {
		grid-template-columns: repeat(10, 1fr);
	}
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
