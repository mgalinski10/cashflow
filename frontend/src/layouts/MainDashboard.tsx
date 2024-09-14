import styles from "./MainDashboard.module.scss";
import { ParentComponentProps } from "./MainWelcomePage";
import React from "react";

export const MainDashboard: React.FC<ParentComponentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
