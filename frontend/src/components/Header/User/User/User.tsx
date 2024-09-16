import styles from "./User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

export const User: React.FC = () => {
  return (
    <div className={styles.container}>
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faGear} />
      </button>
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faBell} />
      </button>
      <div className={styles.user}>
        <button>
          <div>
            <img src="/img/profile.jpg" alt="" />
          </div>
        </button>
        <p>Admin</p>
      </div>
    </div>
  );
};
