import {
  Button,
  DiscoverIcon,
  JobsIcon,
  LearningIcon,
  LinkedInLogo,
  PeopleIcon,
} from "@Components/exports";
import React from "react";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* LinkedIN Logo */}
      <div className={styles.logoContainer}>
        <LinkedInLogo />
      </div>
      {/* NavIconList Logo */}
      <div className={styles.navIconList}>
        <div className={styles.navIcon}>
          <DiscoverIcon />
          <p>Discover</p>
        </div>
        <div className={styles.navIcon}>
          <PeopleIcon />
          <p>People</p>
        </div>
        <div className={styles.navIcon}>
          <LearningIcon />
          <p>Learn</p>
        </div>
        <div className={styles.navIcon}>
          <JobsIcon />
          <p>Jobs</p>
        </div>
      </div>
      {/* Separator */}
      <div className={styles.separator}></div>
      {/* NavAuthButtons */}
      <Button variant="transparent" color="secondary">
        Join now
      </Button>
      <Button variant="outlined" color="primary">
        Sign in
      </Button>
    </header>
  );
};
