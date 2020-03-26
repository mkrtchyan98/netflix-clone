import React from 'react';
import './css/App.css';
import Main from './pages';
import { Switch,Route } from 'react-router-dom';
import Login from './pages/Login';
import MovieInfoPage from "./components/Movies/MovieInfoPage";
import PopularMovies from "./components/Movies/PopularMovies";


function App() {
  return (
    <Switch>
    <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
      <Route path="/movies"render={() => <PopularMovies />}/>
      <Route path="/movie/:id" render={props => <MovieInfoPage id={props.match.params.id} />}/>

                </Switch>
  );
}

export default App;
