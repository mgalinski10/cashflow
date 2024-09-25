import styles from "./RightBar.module.scss";

import { Doughnut } from "../Doughnut/Dougnut";

import { calcTotalAmount } from "../../services/calcTotalAmount";
import { TransactionsProps } from "../MainContent/Transactions/Transactions";
import { countCategories } from "../../services/countCategories";

import { transactions } from "../../assets/transactions";

export const RightBar: React.FC<TransactionsProps> = ({ transactions }) => {
  countCategories(transactions);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4>Expenses by categories</h4>
        <div className={styles.piechart}>
          <Doughnut transactions={transactions} />
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
