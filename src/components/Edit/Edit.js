import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header';
import FileInput from '../FileInput/FileInput';

import style from './Edit.module.css';

export default function Edit() {
  // store tutorial id and language id
  const { id, langid } = useParams();

  return (
    <div className={style.edit}>
      <div className={style.editHeader}>
        <Header />
      </div>
      <p className={style.tutEditor}>Tutorial Editor</p>
      <p className={style.title}>Title</p>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Actual Tutorial Title which can be edited"
          className={style.titleInput}
        />
      </div>
      <div className={style.thumbContainer}>
        <p className={style.thumbnail} style={{ marginBottom: 10 }}>
          Thumbnail
        </p>
        <FileInput />
      </div>
      <div className={style.isPublished}>
        <p className={style.isPublishedTxt}>Is published:</p>
        <div className={style.switchContainer}>
          <label className={style.switch}>
            <input type="checkbox" />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>
      <div className={style.stepsContainer}>
        <div className={style.stepsHeader}>
          <p className={style.steps}>Steps</p>
          <p className={style.amountOfSteps}>0 Steps</p>
        </div>

        <div className={style.stepCard}>
          <div className={style.bars}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
          <p className={style.stepTitle}>Step Title</p>
          <FontAwesomeIcon icon={faTrash} className={style.trashIcon} />
        </div>

        <div className={style.stepCard}>
          <div className={style.bars}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
          <p className={style.stepTitle}>Step Title</p>
          <FontAwesomeIcon icon={faTrash} className={style.trashIcon} />
        </div>

        <div className={style.stepCard}>
          <div className={style.bars}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
          <p className={style.stepTitle}>Step Title</p>
          <FontAwesomeIcon icon={faTrash} className={style.trashIcon} />
        </div>

        <div className={style.newStepCard}>
          <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          <div className={style.stepTitle}>Add new step</div>
        </div>
      </div>
    </div>
  );
}
