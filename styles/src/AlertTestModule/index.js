import styles from "./AlertTestModule.module.css";

// eslint-disable-next-line react/prop-types
export const AlertTestModule = ({ children }) => {
  return <p className={styles.alert}>{children}</p>;
};
