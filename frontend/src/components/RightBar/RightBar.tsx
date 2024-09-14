import styles from "./RightBar.module.scss";

import { Doughnut } from "../Doughnut/Dougnut";

import { calcTotalAmount } from "../../services/calcTotalAmount";
import { TransactionsProps } from "../MainContent/Transactions/Transactions";

export const RightBar: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4>Expenses by categories</h4>
        <div className={styles.piechart}>
          {/* <img src="/img/piechart.jpg" alt="Test image for piechart" />
           */}
          <Doughnut />
        </div>
        <section>
          <h3>Total Expenses Value</h3>
          <h1>$ {calcTotalAmount(transactions)}</h1>
          <button>Add Transaction</button>
        </section>
      </div>
    </div>
  );
};
