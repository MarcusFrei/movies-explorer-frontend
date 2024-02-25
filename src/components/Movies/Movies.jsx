import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import {
  filterMoviesByText,
  findShortMoviesInput,
} from '../../utils/functions';

const Movies = ({
  movies,
  addMovie,
  savedMovies,
  handleSetMoovies,
  moviesCopy,
  findIdToDelete,
  deleteMovie,
}) => {
  return (
    <div className="movies">
      <SearchForm
        handleSetMoovies={handleSetMoovies}
        moviesCopy={moviesCopy}
        movies={movies}
      />
      <MoviesCardList
        movies={movies}
        findIdToDelete={findIdToDelete}
        addMovie={addMovie}
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};

export default Movies;
