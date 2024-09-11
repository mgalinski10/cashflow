import { useState } from "react";
import styles from "./Form.module.scss";

const Form: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [correctMessage, setCorrectMessage] = useState(false);
  const [incorrectMessage, setIncorrectMesage] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      setIncorrectMesage(false);
      setCorrectMessage(true);
    } else {
      setCorrectMessage(false);
      setIncorrectMesage(true);
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Log in</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit" disabled={correctMessage}>
          Submit
        </button>
      </form>
      {incorrectMessage && (
        <p className={styles.incorrect}>
          Invalid username or password. Please try again
        </p>
      )}
      {correctMessage && (
        <p className={styles.correct}>Login successful! Redirecting...</p>
      )}
      <p>Forgot your password? | Create an account</p>
    </div>
  );
};

export default Form;
