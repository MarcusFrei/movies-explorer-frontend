import React, { useEffect, useState } from 'react';
import filmImage from '../../images/film-img.jpeg';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({
  movie,
  addMovie,
  deleteMovie,
  savedMovies,
  findIdToDelete,
}) => {
  const { nameRU, duration, inSaved, image, trailerLink, _id, id } = movie;
  const [isHovered, setIsHovered] = useState(false);
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
    if (savedMovies) {
      isInSaved(id);
    }
  }, [savedMovies]);

  const isInSaved = (id) => savedMovies.find((movie) => movie.movieId === id);

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
      {pathname === '/movies' && isHovered && !isInSaved(id) && (
        <button
          onClick={() => addMovie(movie)}
          className="add__movie-btn btn-card_position"
        >
          Сохранить
        </button>
      )}
      {pathname === '/movies' && isInSaved(id) && (
        <span
          onClick={() => findIdToDelete(id)}
          className="added__movie-btn btn-card_position"
        ></span>
      )}
      {pathname === '/saved-movies' && isHovered && (
        <button
          onClick={() => deleteMovie(_id)}
          className="delete__movie-btn btn-card_position"
        ></button>
      )}
      <div className="movies-card__block">
        <h3 className="movies-card__title">{nameRU}</h3>
        <p className="movies-card__time">{getDuration(duration)}</p>
      </div>
      <a href="#"></a>
    </li>
  );
};

export default MoviesCard;
