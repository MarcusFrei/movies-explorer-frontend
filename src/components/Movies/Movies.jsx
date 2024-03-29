import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = (props) => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default Movies;
