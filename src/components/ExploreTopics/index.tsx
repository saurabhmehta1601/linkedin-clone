import { Button } from "@Components/exports";
import React from "react";
import styles from "./styles.module.scss";

export const ExploreTopics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Explore topics you are interested in</div>
      <div className={styles.topics}>
        <p>CONTENT TOPICS</p>
        <div className={styles.topicsList}>
          <Button>See All Topics</Button>
          <Button color="secondary">Remote</Button>
          <Button color="secondary">Work from Home</Button>
          <Button color="secondary">Retirement</Button>
          <Button color="secondary">Internships</Button>
          <Button color="secondary">Freelancer</Button>
          <Button color="secondary">Salary and Compensation</Button>
          <Button color="secondary">Starting a job</Button>
        </div>
      </div>
    </div>
  );
};
