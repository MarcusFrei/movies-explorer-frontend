import React, { forwardRef } from 'react';
import './Techs.css';

const Techs = forwardRef((props, ref) => {
  return (
    <section className="techs__section" ref={ref}>
      <div className="techs">
        <h3 className="techs__title">Технологии</h3>
        <h4 className="techs__subtitle">7 технологий</h4>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__stack">
          <span className="techs__span">HTML</span>
          <span className="techs__span">CSS</span>
          <span className="techs__span">JS</span>
          <span className="techs__span">React</span>
          <span className="techs__span">Git</span>
          <span className="techs__span">Express.js</span>
          <span className="techs__span">MongoDB</span>
        </div>
      </div>
    </section>
  );
});

export default Techs;
