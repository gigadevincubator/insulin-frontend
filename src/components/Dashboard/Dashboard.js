import React from 'react';

import style from './Dashboard.module.css';

import Searchbar from '../Searchbar/Searchbar';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

export default function Dashboard() {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboardHeader}>
        <Header />
      </div>
      <div>
        <p className={style.greeting}>Good morning, NAME</p>
        <p className={style.question}>How are you today? 👋</p>
      </div>
      <Searchbar />
      <div className={style.tutorials}>
        <p>Suggested enrolled tutorials</p>
        <Menu />
      </div>
    </div>
  );
}
