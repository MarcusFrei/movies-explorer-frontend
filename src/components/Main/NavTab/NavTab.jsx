import React from 'react';
import './NavTab.css';

const NavTab = ({ projectRef, techsRef, studentRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="navtab">
      <span className="navtab_link" onClick={() => scrollToRef(projectRef)}>
        О проекте
      </span>
      <span className="navtab_link" onClick={() => scrollToRef(techsRef)}>
        Технологии
      </span>
      <span className="navtab_link" onClick={() => scrollToRef(studentRef)}>
        Студент
      </span>
    </div>
  );
};

export default NavTab;
