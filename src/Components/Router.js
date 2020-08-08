import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './../Route/Home';
import Movie from './../Route/Movie';
import TV from './../Route/TV';
import Search from './../Route/Search';

function Routers() {
	return (
		<Router>
			<Navigation />
			<Route path="/" exact component={Home}>
				Home
			</Route>
			<Route path="/movie" exact component={Movie}>
				Movie
			</Route>
			<Route path="/tv" component={TV}>
				TV
			</Route>
			<Route path="/search" component={Search}>
				Search
			</Route>
		</Router>
	);
}

export default Routers;
