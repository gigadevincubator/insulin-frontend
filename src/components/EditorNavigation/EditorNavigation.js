import React from 'react';
import { Link } from 'react-router-dom';

import style from './EditorNavigation.module.css';
import arrowLeft from 'assets/arrow-left-black.svg';

export default function EditorNavigation({ children, backTo }) {
  return (
    <div className={style.navContainer}>
      <Link to={backTo} style={{ textDecoration: 'none' }}>
        <img src={arrowLeft} className={style.arrowLeft} alt="arrow left" />
      </Link>
      {children}
    </div>
  );
}
