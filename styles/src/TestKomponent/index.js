import css from "./TestKomponent.module.css";
import PropTypes from "prop-types";

export const TestKomponent = ({ name, surname }) => {
  return (
    <div className={css.wrapper}>
      {name} - {surname}
    </div>
  );
};

TestKomponent.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
};
