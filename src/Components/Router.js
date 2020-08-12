import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Collection from 'Routes/Collection';
import Seasons from 'Routes/Seasons';
import Actor from 'Routes/Actor';
import Season from 'Routes/Season';

function Routers() {
    return (
        <Router>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/:id" component={Detail} />
            <Route path="/search" component={Search} />
            <Route path="/collection/:id" component={Collection} />
            <Route path="/seasons/:id" exact component={Seasons} />
            <Route path="/actor/:id" exact component={Actor} />
            <Route path="/seasons/:id/:season" component={Season} />
            <Redirect from="*" to="/" />
        </Router>
    );
}

export default Routers;
