import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen }) => {
  return (
    <div className="burger-menu">
      <div className={`burger-menu__hover`}>
        <div className="burger-menu__block">
          <button className="burger-menu__close">Close</button>
          <div className="burger-menu__links">
            <Link>Главное </Link>
            <Link>Фильмы </Link>
            <Link>Сохранненые фильмы </Link>
          </div>
          <Link>Аккаунт</Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
