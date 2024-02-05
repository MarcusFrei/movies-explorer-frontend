// Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Navigation = ({ isAuth, onLogout, email }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBurgerMenuOpened, setisBurgerMenuOpened] = useState(false);

  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const closeBurgerMenu = () => {
    setisBurgerMenuOpened(false);
  };

  const showNav = () =>
    windowWidth > 1140 ? (
      <>
        <div className="navigation">
          <Link to="/movies" className="navigation__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            Сохраненные фильмы
          </Link>
        </div>
        <Link to="/profile" className="header_profile_button">
          Аккаунт
        </Link>
      </>
    ) : isBurgerMenuOpened ? (
      <BurgerMenu isOpen={isBurgerMenuOpened} onClose={closeBurgerMenu} />
    ) : (
      <button
        style={{ color: 'green' }}
        onClick={() => setisBurgerMenuOpened(!isBurgerMenuOpened)}
      >
        !!!
      </button>
    );

  return isAuth ? (
    showNav()
  ) : (
    <div className="header_auth">
      <Link to="/signup" className="navigation__link">
        Регистрация
      </Link>
      <Link to="/signin" className="header_authorization_btn">
        Войти
      </Link>
    </div>
  );
};

export default Navigation;
