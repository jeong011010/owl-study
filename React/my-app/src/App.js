import React, { useEffect, useState } from 'react';
import Counter from './components/Counter'
import Movie from './components/Movie'

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log('render');
  });

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    )
  })

  const addMovie = () => {
    event.preventDefault();
    setMovies([
     ...movies,
     {
      title: movieTitle,
      year: movieYear,
     }
   ])
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
        <form onSubmit={addMovie}>
          <input 
            type="text"
            placeholder="영화제목"
            onChange={e=>setMovieTitle(e.target.value)}
          /><br/>
          <input 
            type="text"
            placeholder="개봉년도"
            onChange={e=>setMovieYear(e.target.value)}
          /><br/>
          <button type="submit">영화 추가</button>
        </form>
        {renderMovies}
    </div>
  );
}

export default App;
