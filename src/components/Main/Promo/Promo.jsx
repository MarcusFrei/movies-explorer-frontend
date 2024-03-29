import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = (props) => {
  return (
    <div className="promo">
      <h1 className="promo_title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab />
    </div>
  );
};

export default Promo;
