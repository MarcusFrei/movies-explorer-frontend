import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = ({
  movies,
  addMovie,
  savedMovies,
  moviesCopy,
  findIdToDelete,
  deleteMovie,
  isInSaved,
  isMooviesLoading,
  fetchMovies,
}) => {
  return (
    <div className="movies">
      <SearchForm
        moviesCopy={moviesCopy}
        movies={movies}
        fetchMovies={fetchMovies}
      />
      <MoviesCardList
        movies={movies}
        findIdToDelete={findIdToDelete}
        addMovie={addMovie}
        isInSaved={isInSaved}
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
        isMooviesLoading={isMooviesLoading}
      />
    </div>
  );
};

export default Movies;
