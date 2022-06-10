import {
  ExploreTopics,
  Header,
  JobsOrInterships,
  WelcomeToCommunity,
} from "@Components/exports";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <WelcomeToCommunity />
      <ExploreTopics />
      <JobsOrInterships />
    </>
  );
};

export default IndexPage;
