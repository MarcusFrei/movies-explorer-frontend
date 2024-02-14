import React, { forwardRef } from 'react';
import './AboutMe.css';
import avatar from '../../../images/kot.png';

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className="about-me main-section" ref={ref}>
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__block">
        <div className="about-me__onlytext">
          <h2 className="about-me__name">Марк</h2>
          <h3 className="about-me__job">Фронтенд-разработчик, 25 лет</h3>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/MarcusFrei"
            target="_blank"
            className="about-me__github"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <img src={avatar} alt="Аватарка" className="about-me__image" />
      </div>
    </section>
  );
});

export default AboutMe;
