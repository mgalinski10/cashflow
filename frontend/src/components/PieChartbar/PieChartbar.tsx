import styles from "./PieChartbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

export const PieChartbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <FontAwesomeIcon className={styles.icon} icon={faGear} />
        <FontAwesomeIcon className={styles.icon} icon={faBell} />
        <div className={styles.user}>
          <div>
            <img src="/img/profile.jpg" alt="" />
          </div>
          <p>Admin</p>
        </div>
      </div>
      <div className={styles.data}>
        <h4>Expenses by categories</h4>
        <div className={styles.piechart}>piechart</div>
        <div>
          <h3>Total Expenses Value</h3>
          <h1>$ 2,583.00</h1>
          <button>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};
