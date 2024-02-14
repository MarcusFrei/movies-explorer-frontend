import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = (props) => {
  const movies = [
    { title: 'Фильм 1', duration: 120, inSaved: true },
    { title: 'Фильм 2', duration: 150, inSaved: false },
    { title: 'Фильм 3', duration: 110, inSaved: true },
    { title: 'Фильм 4', duration: 135, inSaved: false },
    { title: 'Фильм 5', duration: 125, inSaved: true },
    { title: 'Фильм 6', duration: 140, inSaved: false },
    { title: 'Фильм 7', duration: 115, inSaved: true },
    { title: 'Фильм 8', duration: 130, inSaved: false },
    { title: 'Фильм 9', duration: 145, inSaved: true },
    { title: 'Фильм 10', duration: 105, inSaved: false },
    { title: 'Фильм 11', duration: 160, inSaved: true },
    { title: 'Фильм 12', duration: 95, inSaved: false },
  ];
  return (
    <section className="movies-list">
      <ul className="movies-list__films">
        {movies.map((item, i) => (
          <MoviesCard movie={item} key={i} />
        ))}
      </ul>
      <button className="movies-list__button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
