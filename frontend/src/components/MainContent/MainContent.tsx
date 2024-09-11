import { type } from "os";
import styles from "./MainContent.module.scss";
import React from "react";

type MainContent = {
  children: React.ReactNode;
  header: string;
};

export const MainContent: React.FC<MainContent> = ({ children, header }) => {
  return (
    <div className={styles.container}>
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
};
