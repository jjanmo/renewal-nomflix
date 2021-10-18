import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import TV from 'pages/TV';
import Detail from 'pages/Detail';
import Search from 'pages/Search';
import Collection from 'pages/Collection';
import Seasons from 'pages/Seasons';
import Actor from 'pages/Actor';
import Season from 'pages/Season';

function AppRouter() {
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

export default AppRouter;
