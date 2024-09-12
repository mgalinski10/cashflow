import styles from "./Transactions.module.scss";

type TransactionsProps = {
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
            <p>{t.date}</p>
            <p>{t.category}</p>
            <p>$ {t.amount}</p>
          </li>
        );
      })}
    </ul>
  );
};
