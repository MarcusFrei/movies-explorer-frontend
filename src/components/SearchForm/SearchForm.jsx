import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { filterMovies } from '../../utils/functions';
import { logDOM } from '@testing-library/react';

const SearchForm = ({
  handleSetSavedMoovies,
  handleSetMoovies,
  moviesCopy,
  movies,
}) => {
  const [inputText, setInputText] = useState('');
  const [checkboxValue, setCheckBoxValue] = useState(false);
  const { pathname } = useLocation();

  const handleOnChangeText = (e) => {
    setInputText(e.target.value);
    if (pathname === '/movies') {
      localStorage.setItem('searchText', e.target.value);
    }
  };

  const handleOnChangeCheckbox = (e) => {
    setCheckBoxValue(e.target.checked);
    localStorage.setItem('isShort', e.target.checked);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const searchText = localStorage.getItem('searchText');
      const isShort = localStorage.getItem('isShort') === 'true';
      if (searchText) setInputText(searchText);
      if (isShort) setCheckBoxValue(true);
      else setCheckBoxValue(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname === '/movies') {
      handleSetMoovies(filterMovies(moviesCopy, inputText, checkboxValue));
    }
    if (pathname === '/saved-movies') {
      handleSetSavedMoovies(filterMovies(moviesCopy, inputText, checkboxValue));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form" noValidate>
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          minLength={2}
          placeholder="Фильм"
          required
          value={inputText}
          onChange={handleOnChangeText}
        />
        <button className="search-form__btn-sbmt" type="submit"></button>
      </div>
      <div className="short-film">
        <label className="toggle-switch">
          <input
            onChange={handleOnChangeCheckbox}
            checked={checkboxValue}
            type="checkbox"
          />
          <span className="slider"></span>
        </label>
        <span className="short-film__span">Короткометражки</span>
      </div>
    </form>
  );
};

export default SearchForm;
