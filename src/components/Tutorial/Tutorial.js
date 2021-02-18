import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams, withRouter } from "react-router-dom";

import Step from "components/Step";
import StepNavigation from "components/StepNavigation";
import {
  getTutorial,
  changeStepTo,
  selectActiveTutorial,
  selectActiveStepNumber,
  selectActiveStepIndex,
} from "components/Tutorial/tutorialsSlice";

import close from "assets/close.svg";
import styles from "./Tutorial.module.css";

const Tutorial = () => {
  const dispatch = useDispatch();

  // Get and stire url location
  let { key } = useLocation();
  const oldURL = useRef(key);

  // Get url params value
  let { id, stepNumber } = useParams();

  // Change activeStep whenever user uses browser's navigation buttons
  useEffect(() => {
    if (oldURL.current !== key) {
      dispatch(changeStepTo(stepNumber));
    }
    oldURL.current = key;
  }, [key]);

  // Fetch tutorial information
  useEffect(() => {
    dispatch(getTutorial({ id, stepNumber }));
  }, [id]);

  // Redux selector for getting the current active tutorial and the active step
  const activeTutorial = useSelector(selectActiveTutorial);
  const activeStepNumber = useSelector(selectActiveStepNumber);
  const activeStepIndex = useSelector(selectActiveStepIndex);

  return (
    <section className={styles.tutorial}>
      <div>
        <div className={styles.header}>
          <Link className={styles.headerClose} to="/">
            <span>
              <img src={close} alt="close" />
            </span>
          </Link>
          <h2 className={styles.headerTitle}>Insulin injection</h2>
          <div className={styles.headerStepCounter}>
            {activeStepNumber}/{activeTutorial?.steps.length}
          </div>
        </div>
        <Step
          title={activeTutorial?.steps[activeStepIndex].title}
          description={activeTutorial?.steps[activeStepIndex].description}
        />
      </div>
      <div className={styles.navigation}>
        <StepNavigation className={styles.navigation} />
      </div>
    </section>
  );
};

export default Tutorial;
