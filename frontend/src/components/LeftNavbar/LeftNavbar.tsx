import styles from "./LeftNavbar.module.scss";

type NavProps = {
  content: { name: string }[];
};

export const LeftNavbar: React.FC<NavProps> = ({ content }) => {
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
