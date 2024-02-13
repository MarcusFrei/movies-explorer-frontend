import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = ({ projectRef, techsRef, studentRef }) => {
  return (
    <div className="promo">
      <h1 className="promo_title">
        Учебный проект студента факультета&nbsp;Веб-разработки.
      </h1>
      <NavTab
        projectRef={projectRef}
        techsRef={techsRef}
        studentRef={studentRef}
      />
    </div>
  );
};

export default Promo;
