import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
	display: flex;
`;
const Item = styled.li`
	&:not(:last-child):after {
		content: '·';
		margin: 0 5px;
	}
`;

const Divider = styled.span`
	margin: 0 10px;
`;

function Genres({ genres }) {
	return (
		<>
			<Container>
				{genres &&
					genres.length > 0 &&
					genres.map((genre, index) => <Item key={index}>{genre.name}</Item>)}
			</Container>
			<Divider>|</Divider>
		</>
	);
}

export default Genres;
