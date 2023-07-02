import styles from "./AlertCssModule.module.css";

// eslint-disable-next-line react/prop-types
export const AlertCssModule = ({ children }) => {
  return <p className={styles.alert}>{children}</p>;
};
