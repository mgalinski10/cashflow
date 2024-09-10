import React from "react";
import styles from "./MainWelcomePage.module.scss";

type ParentComponentProps = {
  children: React.ReactNode;
};

const MainWelcomePage: React.FC<ParentComponentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainWelcomePage;
