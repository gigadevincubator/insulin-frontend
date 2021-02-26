import React from 'react';
import { Link } from 'react-router-dom';

import style from './Menu.module.css';

import data from './mockup';

export default function Menu() {
  return (
    <div className={style.menu}>
      {data.map((value) => {
        // this is temporary until color family is provided
        const [r, g, b] = value.color
          .match(/\w\w/g)
          .map((x) => parseInt(x, 16));
        const bgColorToRgba = `rgba(${r},${g},${b},${0.2})`;

        return (
          <Link
            style={{ textDecoration: 'none' }}
            key={value.id}
            to={`/tutorials/${value.id}/steps/1`}
          >
            <div
              style={{
                background: `linear-gradient(
            90deg,
            ${bgColorToRgba} 0%,
            rgba(255, 255, 255, 0) 106.07%
          )`,
              }}
              className={style.tutorial}
            >
              <div className={style.tutorialCard}>
                <div className={style.tutorialContainer}>
                  <img
                    src={value.thumbnail}
                    alt={value.title}
                    className={style.tutorialImg}
                  />
                  <div className={style.tutorialTxt}>
                    <p className={style.tutorialTitle}>{value.title}</p>
                    <p
                      style={{ color: value.color }}
                      className={style.tutorialSteps}
                    >
                      {value.amountOfSteps} steps
                    </p>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: bgColorToRgba }}
                  className={style.tutorialArrowContainer}
                >
                  <i
                    style={{ color: value.color }}
                    className={style.tutorialArrow}
                  ></i>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
