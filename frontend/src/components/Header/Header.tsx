import styles from "./Header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ children, title }) => {
  return (
    <header className={styles.wrapper}>
      <h1>{title}</h1>
      {children}
    </header>
  );
};
