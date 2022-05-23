import React, {useState} from 'react';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id !== id;
        }));
    };

    const addMovie = (movie) => {
        setMovies([
        ...movies,
        movie
        ]);
    };

    const renderMovies = movies.length ? movies.map(movie => {
        return (
        <Movie movie={movie} key={movie.title} removeMovie={removeMovie}/>
        )
    }) : '추가된 영화가 없습니다.';

    return(
        <>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie}/>
            {renderMovies}
        </>
    )
}

export default Movies;