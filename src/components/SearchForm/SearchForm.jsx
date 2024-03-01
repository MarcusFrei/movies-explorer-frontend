import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { filterMovies } from '../../utils/functions';
import { logDOM } from '@testing-library/react';

const SearchForm = ({
  handleSetSavedMoovies,
  moviesCopy,
  movies,
  fetchMovies,
  handleSetMoovies,
}) => {
  const [inputText, setInputText] = useState('');
  const [checkboxValue, setCheckBoxValue] = useState(false);
  const { pathname } = useLocation();
  const [firsRender, setFirstRender] = useState(false);

  useEffect(() => {
    if (pathname === '/saved-movies') {
      handleSetSavedMoovies(filterMovies(moviesCopy, inputText, checkboxValue));
    }
  }, [checkboxValue]);

  useEffect(() => {
    if (inputText.trim() === '' && pathname === '/movies') handleSetMoovies([]);
  }, [inputText]);

  const handleOnChangeText = (e) => {
    setInputText(e.target.value);
    if (pathname === '/movies') {
      localStorage.setItem('searchText', e.target.value);
    }
  };

  const handleOnChangeCheckbox = (e) => {
    setCheckBoxValue(e.target.checked);
    localStorage.setItem('isShort', e.target.checked);
    if (pathname === '/movies') {
      if (inputText.trim() === '') {
        handleSetMoovies([]);
        return;
      }
      fetchMovies();
    }
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const searchText = localStorage.getItem('searchText');
      const isShort = localStorage.getItem('isShort') === 'true';
      if (searchText) setInputText(searchText);
      if (isShort) setCheckBoxValue(true);
      setFirstRender(true);
      const data = JSON.parse(localStorage.getItem('movies'));
      if (data) handleSetMoovies(data);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pathname === '/movies') {
      if (inputText.trim() === '') {
        handleSetMoovies([]);
      } else fetchMovies();
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
