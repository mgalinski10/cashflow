import styles from "./PieChartbar.module.scss";

import { User } from "./User/User";

export const PieChartbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <User />
      <div className={styles.wrapper}>
        <h4>Expenses by categories</h4>
        <div className={styles.piechart}>
          <img src="/img/piechart.jpg" alt="Test image for piechart" />
        </div>
        <section>
          <h3>Total Expenses Value</h3>
          <h1>$ 2,583.00</h1>
          <button>Add Transaction</button>
        </section>
      </div>
    </div>
  );
};
