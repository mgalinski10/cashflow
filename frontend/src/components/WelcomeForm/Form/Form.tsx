import "./Form.scss";

const Form: React.FC = () => {
  return (
    <div className="form-container">
      <h2>Log in</h2>

      <div>
        {/* <label htmlFor="login"></label> */}
        <input type="text" placeholder="Login" />

        {/* <label htmlFor="password"></label> */}
        <input type="password" placeholder="Password" />

        <button>Submit</button>
      </div>

      <p>Forgot your password? | Create an account</p>
    </div>
  );
};

export default Form;
