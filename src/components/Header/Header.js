import React from 'react';
import style from './Header.module.css';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <p>
          <span>med</span>tut
        </p>
        <Navigation />
      </div>
    </div>
  );
}
