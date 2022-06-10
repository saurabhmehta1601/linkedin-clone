import { RightArrowIcon } from "@Components/RightArrowIcon";
import React from "react";
import styles from "./styles.module.scss";

export const WelcomeToCommunity = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          Welcome to your professional community
        </div>
        <div className={styles.usefulLinks}>
          <div className={styles.linkContainer}>
            <p>Search for a job</p>
            <span className={styles.rightArrow}>
              <RightArrowIcon />
            </span>
          </div>
          <div className={styles.linkContainer}>
            <p>Find a person you know</p>
            <span className={styles.rightArrow}>
              <RightArrowIcon />
            </span>
          </div>
          <div className={styles.linkContainer}>
            <p>Learn a new skill</p>
            <span className={styles.rightArrow}>
              <RightArrowIcon />
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
          className={styles.image}
          src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg"
          alt="find your space"
        />
      </div>
    </div>
  );
};
