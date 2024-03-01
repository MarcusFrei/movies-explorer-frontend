import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`overlay ${isOpen ? 'open' : ''}`}
          onClick={handleOverlayClick}
        ></div>
      )}

      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div onClick={onClose} className="burger-menu__close-button"></div>
        <div className="burger-menu__links">
          <Link
            to="/"
            className={`burger-menu__link ${
              pathname === '/' ? 'burger-menu__link_active' : ''
            }`}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={`burger-menu__link ${
              pathname === '/movies' ? 'burger-menu__link_active' : ''
            }`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`burger-menu__link ${
              pathname === '/saved-movies' ? 'burger-menu__link_active' : ''
            }`}
          >
            Сохраненные фильмы
          </Link>
        </div>
        <Link to="/profile" className="burger-menu__account-link">
          Аккаунт
        </Link>
      </div>
    </>
  );
};

export default BurgerMenu;
