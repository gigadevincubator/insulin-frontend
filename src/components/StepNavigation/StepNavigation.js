import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  decrementStep,
  incrementStep,
  selectActiveTutorial,
  selectActiveStepNumber,
} from "components/Tutorial/tutorialsSlice";

import arrowLeft from "assets/arrow-left-green.svg";
import arrowRight from "assets/arrow-right-white.svg";
import styles from "./StepNavigation.module.css";

const StepNavigation = () => {
  const dispatch = useDispatch();

  const activeTutorial = useSelector(selectActiveTutorial);
  const activeStepNumber = useSelector(selectActiveStepNumber);

  return (
    <nav className={styles.navigation}>
      {1 < activeStepNumber && (
        <Link
          className={styles.buttonBack}
          onClick={() => dispatch(decrementStep())}
          to={`/tutorials/${activeTutorial?.id}/steps/${activeStepNumber - 1}`}
        >
          <img src={arrowLeft} alt="arrow left" />
        </Link>
      )}
      <div className={styles.rightAlign}>
        {/* <button onClick={() => dispatch(incrementStep())}>Repeat</button> */}
        {activeTutorial?.steps.length > activeStepNumber && (
          <Link
            className={styles.buttonForward}
            onClick={() => dispatch(incrementStep())}
            to={`/tutorials/${activeTutorial?.id}/steps/${
              activeStepNumber + 1
            }`}
          >
            Continue
            <img src={arrowRight} alt="arrow right" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default StepNavigation;
