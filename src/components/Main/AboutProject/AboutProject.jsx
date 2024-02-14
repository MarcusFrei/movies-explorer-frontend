import React, { forwardRef } from 'react';
import './AboutProject.css';

const AboutProject = forwardRef((props, ref) => {
  return (
    <div className="about-project" ref={ref}>
      <h3 className="about-project__title">О проекте</h3>
      <div className="about-project__table">
        <div className="about-project__block">
          <p className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__block">
          <p className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time">
        <p className="about-project__week-green">1 неделя</p>
        <p className="about-project__week-grey">4 недели</p>
        <p className="about-project__table-text">Back-end</p>
        <p className="about-project__table-text">Front-end</p>
      </div>
    </div>
  );
});

export default AboutProject;
