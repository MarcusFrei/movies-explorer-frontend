import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = (props) => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default SavedMovies;