import React from 'react';
import './NavTab.css';

const NavTab = ({ projectRef, techsRef, studentRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="navtab">
      <button
        className="navtab__link"
        onClick={() => scrollToRef(projectRef)}
        type="button"
      >
        О проекте
      </button>
      <button
        className="navtab__link"
        onClick={() => scrollToRef(techsRef)}
        type="button"
      >
        Технологии
      </button>
      <button
        className="navtab__link"
        onClick={() => scrollToRef(studentRef)}
        type="button"
      >
        Студент
      </button>
    </div>
  );
};

export default NavTab;
