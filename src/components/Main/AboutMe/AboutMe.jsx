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
            Сейчас живу в Белграде и заканчиваю курсы веб-разработика. Получил
            высшее образование в Москве в ВАВТ-е, закончил факультет
            внешнеторгового менеджера. На данный момент занят параллельным
            поискам работы по свежеполученному доп.образованию. Моими хобби
            являются чтение, кодинг, а также изучение языков.
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
