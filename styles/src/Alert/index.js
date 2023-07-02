const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
};

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

const getBgColor = (variant) => {
  const colors = {
    info: "blue",
    success: "green",
    error: "red",
    warning: "orange",
    default: "pink",
  };

  //   if (variant) {
  //     return colors[variant];
  //   } else {
  //     new Error(`Unsupported variant prop value - ${variant}`);
  //   }

  return colors[variant] || colors["default"];
};

// eslint-disable-next-line react/prop-types
export const Alert = ({ variant, children }) => {
  return (
    <p
      style={{
        ...alertStyles,
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};
