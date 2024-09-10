import { useState } from "react";
import styles from "./Form.module.scss";

const Form: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log("zalogowano");
    } else {
      console.log("error");
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

        <button type="submit">Submit</button>
      </form>

      <p>Forgot your password? | Create an account</p>
    </div>
  );
};

export default Form;
