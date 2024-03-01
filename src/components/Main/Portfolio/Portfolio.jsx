import React from 'react';
import arrow from '../../../images/arrow.svg';
import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <section className="portfolio main-section">
      <h5 className="portfolio__title">Портфолио</h5>
      <div className="portfolio__list">
        <a
          className="portfolio__list-item"
          href="https://github.com/MarcusFrei/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <span className="portfolio__link">Статичный сайт</span>
          <img src={arrow} alt="Стрелочка" />
        </a>
        <a
          className="portfolio__list-item"
          href="https://github.com/MarcusFrei/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <span className="portfolio__link">Адаптивный сайт</span>
          <img src={arrow} alt="Стрелочка" />
        </a>
        <a
          className="portfolio__list-item"
          href="https://github.com/MarcusFrei/mesto"
          target="_blank"
          rel="noreferrer"
        >
          <span className="portfolio__link">Одностраничное приложение</span>
          <img src={arrow} alt="Стрелочка" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
