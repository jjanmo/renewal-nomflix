import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
`;
const Title = styled.div`
	grid-column: 2/5;
	grid-row: 2/4;
`;
const Classification = styled.div`
	grid-column: 2/5;
	grid-row: 5;
`;
const Overview = styled.div`
	grid-column: 2/5;
	grid-row: 6;
`;
const Actors = styled.div`
	grid-column: 2/5;
	grid-row: 7;
`;
const Poster = styled.div`
	grid-column: 7/10;
	grid-row: 3/7;
`;

const Divider = styled.span``;

function TVContent({ tv }) {
	return (
		<Container>
			<Title>{tv.name}</Title>
			<Classification></Classification>
			<Overview></Overview>
			<Actors></Actors>
			<Poster></Poster>
		</Container>
	);
}

export default TVContent;
