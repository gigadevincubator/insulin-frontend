import React from "react";

import Player from "components/Player";

import styles from "./Step.module.css";

const Step = ({ title, description }) => {
  return (
    <div>
      <div className={styles.videoWrapper}>
        <Player />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Step;
