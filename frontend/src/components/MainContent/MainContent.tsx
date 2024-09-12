import styles from "./MainContent.module.scss";
import React from "react";

type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};
