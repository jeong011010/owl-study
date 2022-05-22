import React, { useState } from 'react';
import InputField from './InputField';
import Movie from './Movie'

const MovieForm = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [titleError, setTitleError] =useState('');
  const [yearError, setYearError] =useState('');
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

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  }

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movieTitle){
        setTitleError('영화제목을 넣어주세요');
        validated = false;
    }
    if (!movieYear){
        setYearError('개봉년도를 넣어주세요');
        validated = false;
    }
    console.log(validated);
    return validated;
  }

  const resetErrors = () => {
      setTitleError('');
      setYearError('');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        addMovie({
            id: Date.now(),
            title: movieTitle,
            year: movieYear,
        });
        resetErrors();
        resetForm();
    }
    
  };

  return (
    <div>
      <h1>Movie list</h1>
      <form onSubmit={onSubmit}>
          <InputField
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={e => setMovieTitle(e.target.value)}
            errorMessage={titleError}
          />
          <InputField
            type="number"
            value={movieYear}
            placeholder="개봉년도"
            onChange={e => setMovieYear(e.target.value)}
            errorMessage={yearError}
          />
          <button type="submit">영화 추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default MovieForm;
