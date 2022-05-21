import React, { useEffect, useState } from 'react';
import Movie from './components/Movie'
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log('render');
  });

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    )
  })

  const addMovie = (movie) => {
    setMovies([
     ...movies,
     movie
    ]);
  };

  return (
    <div className="App">
      <h1>Movie list</h1>  
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;
