import styles from "./LeftNavbar.module.scss";

const content = [
  { name: "Transactions" },
  // { name: "Dashboard" },
  // { name: "Reports" },
];

export const LeftNavbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Cashflow.</h1>
        <ul>
          {content.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
      <button>Logout</button>
    </div>
  );
};
