import { Button } from "@Components/exports";
import React from "react";
import styles from "./styles.module.scss";

export const JobsOrInterships = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Find the right job or internship for you
      </div>
      <div className={styles.topics}>
        <p>Suggested Searches</p>
        <div className={styles.topicsList}>
          <Button color="secondary">Engineering</Button>
          <Button color="secondary">Bussiness Development</Button>
          <Button color="secondary">Finance</Button>
          <Button color="secondary">Administrative Assistant</Button>
          <Button color="secondary">Retail Associate</Button>
          <Button color="secondary">Customer Service</Button>
          <Button color="secondary">Operations</Button>
          <Button color="secondary">Information Technology</Button>
          <Button color="secondary">Marketing</Button>
          <Button color="secondary">Human Resources</Button>
        </div>
      </div>
    </div>
  );
};
