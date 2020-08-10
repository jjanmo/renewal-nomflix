import React, { useState, useEffect } from 'react';
import { movieApi, tvApi } from 'api';
import styled from 'styled-components';

const Container = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 1.1rem;
	margin-top: 10px;
`;
const Title = styled.span`
	font-weight: 600;
	font-size: 1.2rem;
	color: #eee;
	text-transform: uppercase;
`;

const List = styled.ul`
	/* display: flex; */
`;
const Item = styled.li`
	list-style: none;
	margin: 10px;
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
`;

const Profile = styled.div`
	background-image: url(${(props) => props.profileUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100px;
	height: 150px;
	border-radius: 5px;
`;
const Name = styled.div``;
const Character = styled.div``;
const Key = styled.span``;
const Value = styled.span``;

function Actors({ id, isMovie = false }) {
	const [actors, setActors] = useState([]);

	const fetchData = async () => {
		if (isMovie) {
			const {
				data: { cast },
			} = await movieApi.getActors(id);
			setActors(cast.slice(0, 4));
		} else {
			const {
				data: { cast },
			} = await tvApi.getActors(id);
			setActors(cast.slice(0, 4));
		}
	};

	useEffect(() => {
		fetchData();
	});

	return (
		<Container>
			<Title>actors </Title>
			<List>
				{actors.map((actor, index) => (
					<Item key={index}>
						<Profile
							profileUrl={
								actor.profile_path
									? `https://image.tmdb.org/t/p/w154${actor.profile_path}`
									: ''
							}></Profile>
						<Name>
							<Key>NAME : </Key>
							<Value>{actor.name}</Value>
						</Name>
						<Character>
							<Key>CHARACTER : </Key>
							<Value>{actor.character}</Value>
						</Character>
					</Item>
				))}
			</List>
		</Container>
	);
}

export default Actors;

//
