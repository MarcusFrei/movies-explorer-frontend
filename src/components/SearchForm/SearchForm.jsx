import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <form className="search-form" noValidate>
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          minLength={2}
          placeholder="Фильм"
          required
        />
        <button className="search-form__btn-sbmt" type="submit"></button>
      </div>
      <div className="short-film">
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span className="short-film__span">Короткометражки</span>
      </div>
    </form>
  );
};

export default SearchForm;
