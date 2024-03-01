import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({
  movie,
  addMovie,
  isInSaved,
  deleteMovie,
  savedMovies,
  isSaveShow,
  findIdToDelete,
}) => {
  const { nameRU, duration, image, trailerLink, _id, id } = movie;
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { pathname } = useLocation();
  const getDuration = (incomeDuration) => {
    const hours = Math.floor(incomeDuration / 60);
    const minutes = incomeDuration % 60;
    return `${hours}ч ${minutes.toString().padStart(2, '0')}м`;
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      setIsSaved(isInSaved(id));
    }
  }, [savedMovies]);

  return (
    <li
      className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={trailerLink} target="_blank">
        <img
          src={
            pathname === '/movies'
              ? `https://api.nomoreparties.co/${image.url}`
              : movie.image
          }
          alt="картинка фильма"
          className="movies-card__img"
        />
      </a>
      {pathname === '/movies' && !isSaved && (isSaveShow || isHovered) && (
        <button
          onClick={() => addMovie(movie)}
          className="add__movie-btn btn-card_position"
        >
          Сохранить
        </button>
      )}
      {pathname === '/movies' && isSaved && (
        <span
          onClick={() => findIdToDelete(id)}
          className="added__movie-btn btn-card_position"
        ></span>
      )}
      {pathname === '/saved-movies' && (isSaveShow || isHovered) && (
        <button
          onClick={() => deleteMovie(_id)}
          className="delete__movie-btn btn-card_position"
        ></button>
      )}
      <div className="movies-card__block">
        <h3 className="movies-card__title">{nameRU}</h3>
        <p className="movies-card__time">{getDuration(duration)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
