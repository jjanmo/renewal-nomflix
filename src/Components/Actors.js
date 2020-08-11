import React, { useState, useEffect } from 'react';
import { movieApi, tvApi } from 'api';
import styled from 'styled-components';

const Container = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 1.1rem;
	margin-top: 10px;
`;
const Title = styled.span`
	font-weight: 550;
	font-size: 1.2rem;
	color: #eee;
	text-transform: uppercase;
`;
const List = styled.ul`
	display: flex;
	justify-content: left;
	align-items: center;
	overflow: auto;
`;
const Item = styled.li`
	list-style: none;
	margin: 10px;
	width: 120px;
	height: 150px;
	border-radius: 5px;
	position: relative;
	overflow: hidden;
	cursor: pointer;
`;

const Profile = styled.div`
	background-image: url(${(props) => props.profileUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100%;
`;
const Name = styled.div`
	font-size: 15px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	transition: all 0.4s ease-in-out;
	opacity: 1;
	${Item}:hover & {
		transform: translate(50%, 50%);
		opacity: 0;
	}
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: opacity 0.4s ease-in-out;
	background-color: rgba(0, 0, 0, 0.4);
	${Item}:hover & {
		background-color: transparent;
	}
`;

function Actors({ id, isMovie = false }) {
	const [actors, setActors] = useState([]);

	const fetchData = async () => {
		try {
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
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		actors && (
			<Container>
				<Title>actors</Title>
				<List>
					{actors.map((actor, index) => (
						<Item key={index}>
							<Overlay isProfile={!!actor.profile_path} />
							<Profile
								profileUrl={
									actor.profile_path
										? `https://image.tmdb.org/t/p/w154${actor.profile_path}`
										: ''
								}></Profile>
							<Name>{actor.name}</Name>
						</Item>
					))}
				</List>
			</Container>
		)
	);
}

export default Actors;
