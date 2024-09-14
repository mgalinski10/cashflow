import styles from "./User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

export const User: React.FC = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faGear} />
      <FontAwesomeIcon className={styles.icon} icon={faBell} />
      <div className={styles.user}>
        <div>
          <img src="/img/profile.jpg" alt="" />
        </div>
        <p>Admin</p>
      </div>
    </div>
  );
};
