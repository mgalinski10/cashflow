import { useState } from "react";
import { calcTotalAmount } from "../../services/calcTotalAmount";
import { TransactionsProps } from "../MainContent/Transactions/Transactions";
import { Form } from "./Form/Form";
import styles from "./PieChartbar.module.scss";

import { User } from "./User/User";

export const PieChartbar: React.FC<TransactionsProps> = ({ transactions }) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <User />
      {!formOpen && (
        <div className={styles.wrapper}>
          <h4>Expenses by categories</h4>
          <div className={styles.piechart}>
            <img src="/img/piechart.jpg" alt="Test image for piechart" />
          </div>
          <section>
            <h3>Total Expenses Value</h3>
            <h1>$ {calcTotalAmount(transactions)}</h1>
            <button onClick={() => setFormOpen(true)}>Add Transaction</button>
          </section>
        </div>
      )}
      {formOpen && <Form />}
    </div>
  );
};
