import React from 'react';

import style from './Searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Searchbar() {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
      <input
        type="text"
        name="searchbar"
        placeholder="Search for an enrolled tutorial"
        className={style.searchbar}
      />
    </div>
  );
}
