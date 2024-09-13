import styles from "./Form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export const Form = () => {
  return (
    <form className={styles.form}>
      <section>
        <h3>New Transaction</h3>
        <FontAwesomeIcon className={styles.icon} icon={faClose} />
      </section>

      <label htmlFor="amount">Amount</label>
      <input type="number" />
      <label htmlFor="categories">Category</label>
      <select id="categories">
        <option disabled>
          Choose <option value=""></option>
        </option>
        <option value="Food">Food</option>
        <option value="Car">Car</option>
        <option value="Investments">Investments</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
      </select>
      <label htmlFor="date">Date</label>
      <input type="date" />
      <button type="submit">Add</button>
    </form>
  );
};
