import React, { useRef } from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import './Main.css';

const Main = (props) => {
  const projectRef = useRef(null);
  const techsRef = useRef(null);
  const studentRef = useRef(null);
  return (
    <div className="main">
      <Promo
        projectRef={projectRef}
        techsRef={techsRef}
        studentRef={studentRef}
      />
      <AboutProject ref={projectRef} />
      <Techs ref={techsRef} />
      <AboutMe ref={studentRef} />
      <Portfolio />
    </div>
  );
};

export default Main;
