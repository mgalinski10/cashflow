import styles from "./WelcomeForm.module.scss";
import Form from "./Form/Form";

const WelcomeCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};

export default WelcomeCard;
