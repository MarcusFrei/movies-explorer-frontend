import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
  movies,
  fetchSavedMoview,
  deleteMovie,
  handleSetSavedMoovies,
  moviesCopy,
  isMooviesLoading,
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

      <MoviesCardList
        movies={movies}
        deleteMovie={deleteMovie}
        isMooviesLoading={isMooviesLoading}
      />
    </div>
  );
};

export default SavedMovies;
