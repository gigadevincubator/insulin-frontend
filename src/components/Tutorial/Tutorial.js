import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getTutorial } from "./tutorialsSlice";

import close from "assets/close.svg";
import styles from "./Tutorial.module.css";

const Tutorial = () => {
  // Getting url params
  let { id, stepNumber } = useParams();
  console.log(id, stepNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutorial());
  });

  return (
    <section className={styles.tutorial}>
      <div className={styles.header}>
        <Link className={styles.headerClose} to="/">
          <span>
            <img src={close} alt="close" />
          </span>
        </Link>
        <h2 className={styles.headerTitle}>Insulin injection</h2>
        <div className={styles.headerStepCounter}>2/12</div>
      </div>
    </section>
  );
};

export default Tutorial;
