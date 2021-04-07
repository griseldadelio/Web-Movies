import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Favorite, NowPlaying, PopularMovies, TopRated, Search } from './screens';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Favorite' component={Favorite} />
        <Route path='/NowPlaying' component={NowPlaying} />
        <Route path='/Popular' component={PopularMovies} />
        <Route path='/Search' component={Search} />
        <Route path='/TopRated' component={TopRated} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
