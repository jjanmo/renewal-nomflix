import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Screens/Home';
import TV from 'Screens/TV';
import Search from 'Screens/Home';
import Header from './Components/Header';

function Routers() {
	return (
		<Router>
			<Header />
			<Route path="/" exact component={Home}>
				Home
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
