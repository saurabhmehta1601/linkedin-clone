import { Header, WelcomeToCommunity } from "@Components/exports";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <WelcomeToCommunity />
    </>
  );
};

export default IndexPage;
