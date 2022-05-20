import React, { useEffect, useState } from 'react';
import Counter from './components/Counter'
import Movie from './components/Movie'

function App() {
  const movies = [
    {title:'kossie coder1', year:2001},
    {title:'kossie coder2', year:2002},
    {title:'kossie coder3', year:2003},
  ];

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie}/>
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
