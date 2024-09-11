import styles from "./Transactions.module.scss";

export const Transactions: React.FC = () => {
  const transactions = [
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
    { id: 1, category: "Food", amount: 20, date: "11.09.2024" },
  ];

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
