import React from 'react';
import { Link } from 'react-router-dom';

import style from './EditorNavigation.module.css';
import arrowLeft from 'assets/arrow-left-black.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function EditorNavigation() {
  return (
    <div className={style.navContainer}>
      <Link to={'/create-tutorial'} style={{ textDecoration: 'none' }}>
        <img src={arrowLeft} className={style.arrowLeft} alt="arrow left" />
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className={style.finishBtn}>
          <FontAwesomeIcon icon={faCheck} className={style.checkIcon} />
          Save
        </div>
      </Link>
    </div>
  );
}
