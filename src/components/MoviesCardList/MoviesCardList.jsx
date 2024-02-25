import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  addMovie,
  deleteMovie,
  savedMovies,
  findIdToDelete,
}) => {
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsToAdd, setCardsToAdd] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, [movies]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCardsCount(12);
        setCardsToAdd(3);
      } else if (window.innerWidth < 768 && window.innerWidth >= 480) {
        setCardsCount(8);
        setCardsToAdd(2);
      } else {
        setCardsCount(5);
        setCardsToAdd(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addMoreCards = () => {
    setIsloading(true);

    setCardsCount((prev) => prev + cardsToAdd);

    setIsloading(false);
  };
  return (
    <section className="movies-list">
      <ul className="movies-list__films">
        {movies.slice(0, cardsCount).map((item, i) => (
          <MoviesCard
            movie={item}
            key={i}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}
            findIdToDelete={findIdToDelete}
          />
        ))}
      </ul>
      {movies.length > cardsCount && !isLoading && (
        <button className="movies-list__button" onClick={addMoreCards}>
          Ещё
        </button>
      )}
      {movies.length === 0 && !isLoading && (
        <h2 className="movies-list__not-found">
          Я ничего для тебя не нашёл :(
        </h2>
      )}
      {isLoading && <span className="loader"></span>}
    </section>
  );
};

export default MoviesCardList;
