import React, { useState } from 'react';

import style from './Navigation.module.css';

export default function Navigation() {
  const [isClicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(!isClicked)}
      className={style.burgerContainer}
    >
      <span
        className={`${style.burger} ${isClicked ? style.active : ''}`}
      ></span>
    </div>
  );
}
