import styles from "./MainContent.module.scss";
import React from "react";

type MainContentProps = {
  children: React.ReactNode;
  header: string;
};

export const MainContent: React.FC<MainContentProps> = ({
  children,
  header,
}) => {
  return (
    <div className={styles.container}>
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
};
