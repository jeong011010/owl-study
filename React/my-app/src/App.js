import React, { useEffect, useState } from 'react';
import Movie from './components/Movie'
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BroswerRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    console.log(id);
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title} removeMovie={removeMovie}/>
    )
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
     ...movies,
     movie
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Movie list</h1>  
        <MovieForm addMovie={addMovie}/>
        {renderMovies}
      </div>
    </Router>
  );
}

export default App;
