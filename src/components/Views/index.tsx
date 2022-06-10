import React from "react";
import MediaQuery from "react-responsive";

export const MobileView = (props) => {
  return <MediaQuery maxWidth={640}>{props.children}</MediaQuery>;
};

export const DesktopView = (props) => {
  return <MediaQuery minWidth={1024}>{props.children}</MediaQuery>;
};
