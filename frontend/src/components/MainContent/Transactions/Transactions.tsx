import styles from "./Transactions.module.scss";

export type TransactionsProps = {
  transactions: {
    id: number;
    category: string;
    amount: number;
    date: string;
  }[];
};

export const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <ul className={styles.transactions}>
      <li className={styles.header}>
        <input type="checkbox"></input>
        <p>Date & Time</p>
        <p>Category</p>
        <p>Amount</p>
      </li>
      {transactions.map((t) => {
        return (
          <li>
            <input type="checkbox"></input>
            <p className={styles.date}>{t.date}</p>
            <p>{t.category}</p>
            <p className={t.amount > 0 ? styles.green : styles.red}>
              $ {t.amount}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
