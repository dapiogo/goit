import clsx from "clsx";
import "./AlertCslx.css";

// eslint-disable-next-line react/prop-types
export const AlertCslx = ({ variant, children }) => {
  const className = clsx(
    // "first",
    // 10,
    // undefined && "second",
    // true && "third",
    // true ? "fourth" : "fifth",
    variant === "second" ? "alert" : "empty-variant"
  );

  return <p className={className}>{children}</p>;
};
