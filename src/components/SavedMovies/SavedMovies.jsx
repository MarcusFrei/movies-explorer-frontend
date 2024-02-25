import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
  movies,
  fetchSavedMoview,
  deleteMovie,
  handleSetSavedMoovies,
  moviesCopy,
}) => {
  useEffect(() => {
    return () => handleSetSavedMoovies(moviesCopy);
  }, []);
  return (
    <div className="movies">
      <SearchForm
        movies={movies}
        handleSetSavedMoovies={handleSetSavedMoovies}
        moviesCopy={moviesCopy}
        fetchSavedMoview={fetchSavedMoview}
      />
      <MoviesCardList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
};

export default SavedMovies;
