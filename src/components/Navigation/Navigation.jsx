import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Navigation = ({ isAuth }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    closeBurgerMenu();
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpened(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
  };

  const renderDesktopNav = () => (
    <>
      <div className="navigation">
        <Link
          to="/movies"
          className={`navigation__link ${
            pathname === '/movies' ? 'navigation__link_active' : ''
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`navigation__link ${
            pathname === '/saved-movies' ? 'navigation__link_active' : ''
          }`}
        >
          Сохраненные фильмы
        </Link>
      </div>
      <Link to="/profile" className="header_profile_button">
        Аккаунт
      </Link>
    </>
  );

  const renderMobileNav = () => (
    <button
      style={{ color: 'green' }}
      onClick={toggleBurgerMenu}
      className="burger-menu__btn"
    ></button>
  );

  const renderAuthLinks = () => (
    <div className="header_auth">
      <Link to="/signup" className="navigation__link">
        Регистрация
      </Link>
      <Link to="/signin" className="header_authorization_btn">
        Войти
      </Link>
    </div>
  );
  return isAuth ? (
    <>
      {windowWidth > 1140 ? renderDesktopNav() : renderMobileNav()}
      <BurgerMenu isOpen={isBurgerMenuOpened} onClose={closeBurgerMenu} />
    </>
  ) : (
    renderAuthLinks()
  );
};

export default Navigation;
