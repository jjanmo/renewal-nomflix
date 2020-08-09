import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

function Routers() {
    return (
        <Router>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/:id" component={TV} />
            <Route path="/search" component={Search} />
        </Router>
    );
}

export default Routers;
