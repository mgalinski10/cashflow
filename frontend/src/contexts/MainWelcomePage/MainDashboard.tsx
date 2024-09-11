import styles from "./MainDashboard.module.scss";
import React from "react";
import { ParentComponentProps } from "./MainWelcomePage";

export const MainDashboard: React.FC<ParentComponentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
