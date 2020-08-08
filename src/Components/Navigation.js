import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 70px;
	background-color: #0a141d;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const InnerBox = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 80%;
	border-radius: 5px;
	background-color: #3f7293;
	overflow: hidden;
`;

const Item = styled.li`
	list-style: none;
	width: 100%;
	&:not(:first-child) {
		border-left: 1px solid rgba(0, 0, 0, 0.25);
	}
	&:not(:last-child) {
		border-right: 1px solid rgba(0, 0, 0, 0.25);
	}
	&:hover {
		background-color: #dce5ec;
	}
`;

const SLink = styled(Link)`
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 0;
	color: white;
	&:hover {
		color: #212121;
	}
`;

function Navigation() {
	return (
		<Header>
			<InnerBox>
				<Item>
					<SLink to="/">Home</SLink>
				</Item>
				<Item>
					<SLink to="/movie">Movie</SLink>
				</Item>
				<Item>
					<SLink to="/tv">TV</SLink>
				</Item>
				<Item>
					<SLink to="search">Search</SLink>
				</Item>
			</InnerBox>
		</Header>
	);
}

export default Navigation;
