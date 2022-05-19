import React, { useEffect, useState } from 'react';
import Counter from './components/Counter'

function App() {
  const movies = [
    {title:'kossie coder1', year:2001},
    {title:'kossie coder2', year:2002},
    {title:'kossie coder3', year:2003},
  ];

  const renderMovies = movies.map(movie => {
    return (
      <div className="movie" key={movie.title}>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-year">{movie.year}</div>
        </div>
    )
  })

  return (
    <div className="App">
      <h1>Movie list</h1>
        {renderMovies}
    </div>
  );
}

export default App;
