import React, { useState } from 'react';
import filmImage from '../../../images/film-img.jpeg';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {
  const { title, duration, inSaved } = movie;
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();
  const getDuration = () => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes.toString().padStart(2, '0')}м`;
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {' '}
      <img src={filmImage} alt="Movie img" className="movies-card__img" />
      {pathname === '/movies' && isHovered && !inSaved && (
        <button className="add__movie-btn btn-card_position">Сохранить</button>
      )}
      {pathname === '/movies' && inSaved && (
        <span className="added__movie-btn btn-card_position"></span>
      )}
      {pathname === '/saved-movies' && isHovered && (
        <button className="add__movie-btn">Удалить</button>
      )}
      <div className="movies-card__block">
        <h3 className="movies-card__title">{title}</h3>
        <p className="movies-card__time">{getDuration()}</p>
        {/* <button onClick={() => console.log(title)}>KILL ME</button> */}
      </div>
      <a href="#"></a>
    </div>
  );
};

export default MoviesCard;
