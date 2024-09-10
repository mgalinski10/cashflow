import { useEffect } from "react";
import styles from "./WelcomeCard.module.scss";

const WelcomeCard: React.FC = () => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.container}>
      <h1>Cashflow </h1>
      <h3>
        Track your income, manage expenses, and maximize your savings
        effortlessly.
      </h3>
    </div>
  );
};

export default WelcomeCard;
