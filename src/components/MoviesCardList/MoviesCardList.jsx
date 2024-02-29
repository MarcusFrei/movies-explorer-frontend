import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({
  movies,
  addMovie,
  isInSaved,
  deleteMovie,
  savedMovies,
  isMooviesLoading,
  findIdToDelete,
}) => {
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsToAdd, setCardsToAdd] = useState(0);
  const [isSaveShow, setIsSaveshow] = useState(false);
  const { pathname } = useLocation();

  const handleResize = () => {
    if (window.innerWidth >= 1140) {
      setCardsCount(12);
      setCardsToAdd(3);
      setIsSaveshow(false);
    } else if (window.innerWidth < 1140 && window.innerWidth >= 718) {
      setCardsCount(8);
      setCardsToAdd(2);
      setIsSaveshow(true);
    } else {
      setCardsCount(5);
      setCardsToAdd(2);
      setIsSaveshow(true);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, [movies]);
  const addMoreCards = () => {
    setCardsCount((prev) => prev + cardsToAdd);
  };

  return (
    <section className="movies-list">
      <ul className="movies-list__films">
        {movies
          ?.slice(0, pathname === '/movies' ? cardsCount : movies.length)
          .map((item) => (
            <MoviesCard
              movie={item}
              isInSaved={isInSaved}
              key={item.id || item._id}
              addMovie={addMovie}
              deleteMovie={deleteMovie}
              savedMovies={savedMovies}
              findIdToDelete={findIdToDelete}
              isSaveShow={isSaveShow}
            />
          ))}
      </ul>

      {movies.length > cardsCount &&
        !isMooviesLoading &&
        pathname === '/movies' && (
          <button className="movies-list__button" onClick={addMoreCards}>
            Ещё
          </button>
        )}
      {movies.length === 0 && !isMooviesLoading && (
        <h2 className="movies-list__not-found">Ничего не найдено ...</h2>
      )}
      {isMooviesLoading && <span className="loader"></span>}
    </section>
  );
};

export default MoviesCardList;
