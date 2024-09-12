import { useState } from "react";
import styles from "./LeftNavbar.module.scss";

type NavProps = {
  content: { name: string }[];
};

export const LeftNavbar: React.FC<NavProps> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <h1>Cashflow.</h1>
        <ul>
          {content.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.active : ""}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <button>Logout</button>
    </div>
  );
};
