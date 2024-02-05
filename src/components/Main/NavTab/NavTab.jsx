import React from 'react';
import './NavTab.css';

const NavTab = (props) => {
  return (
    <div className="navtab">
      <span className="navtab_link">О проекте</span>
      <span className="navtab_link">Технологии</span>
      <span className="navtab_link">Студент</span>
    </div>
  );
};

export default NavTab;
