import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';

import Header from '../Header/Header';
import FileInput from '../FileInput/FileInput';
import EditorNavigation from '../EditorNavigation/EditorNavigation';

import arrowRight from 'assets/arrow-right-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import style from './CreateTutorial.module.css';

export default function CreateTutorial() {
  // dropdown values
  const [languages, setLanguages] = useState([
    { value: 'en', label: 'English' },
    { value: 'da', label: 'Danish' },
  ]);

  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  const checkValues = (e) => {
    if (!title) {
      inputRef.current.style.border = '1px solid red';
      e.preventDefault();
    }
  };

  // for the dropdown arrow
  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <FontAwesomeIcon
            icon={props.selectProps.menuIsOpen ? faAngleUp : faAngleDown}
            className={style.ddIndicator}
          />
        </components.DropdownIndicator>
      )
    );
  };

  // dropdown styles
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 14,
      background: state.isSelected ? '#000' : '#fff',
      color: state.isSelected ? '#fff' : '#000',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      width: 332,
      height: 40,
      borderRadius: 19,
      display: 'flex',
      background: '#f9f9f9',
      padding: '10px 10px 9px 19px',
      border: 'none',
      outline: 'none',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className={style.createTutorial}>
      <div className={style.createHeader}>
        <Header />
      </div>
      <div className={style.title}>
        <p>Create a tutorial</p>
      </div>
      <div className={style.inputContainer}>
        <p>Think of a proper title</p>
        <input
          type="text"
          name="title"
          placeholder="Tutorial Title"
          className={style.titleInput}
          onChange={(e) => {
            setTitle(e.target.value);
            e.target.style.border = 'none';
          }}
          ref={inputRef}
        />
      </div>
      <div className={style.languageContainer}>
        <p>Language of the tutorial</p>
        <Select
          styles={customStyles}
          components={{ DropdownIndicator }}
          options={languages}
          placeholder="Select a language"
          isSearchable={false}
        />
      </div>
      <div className={style.thumbnailContainer}>
        <p>Thumbnail</p>
        <FileInput />
      </div>
      <EditorNavigation backTo={'/'}>
        <Link
          to={'/'}
          style={{ textDecoration: 'none' }}
          onClick={(e) => checkValues(e)}
        >
          <div className={style.continueBtn}>
            Continue
            <img
              src={arrowRight}
              className={style.arrowRight}
              alt="arrow right"
            />
          </div>
        </Link>
      </EditorNavigation>
    </div>
  );
}
