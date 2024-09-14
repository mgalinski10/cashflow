import styles from "./MainContent.module.scss";
import React from "react";
import { Header } from "../Header/Header";
import { User } from "../Header/User/User/User";

type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header title="Transactions">
        <User />
      </Header>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
