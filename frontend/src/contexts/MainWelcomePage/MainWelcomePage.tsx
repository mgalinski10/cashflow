import React from "react";
import "./MainWelcomePage.scss";

type ParentComponentProps = {
  children: React.ReactNode;
};

const MainWelcomePage: React.FC<ParentComponentProps> = ({ children }) => {
  return <div className="welcome-container">{children}</div>;
};

export default MainWelcomePage;
