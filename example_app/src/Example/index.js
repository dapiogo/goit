import PropTypes from 'prop-types';

export const Example = ({ isVisible, names, obj }) => {
  const { name, count } = obj;
  return (
    <div>
      {count} - {name}
      <div>
        {/* ternary operator jesli isVisible true pokaz imiona jesli isVisible
        false pokaz komunikat nie ma nic */}
        {isVisible ? <div>{names.map((el) => el)}</div> : <div>Nie ma nic</div>}
        {/* AND && renderowanie warunkowe jesli lewa strona true pokaz imiona, jesli nie nie pokazuje nic */}
        {isVisible && <div>{names.map((el) => el)}</div>}
      </div>
    </div>
  );
};

Example.propTypes = {
  isVisible: PropTypes.bool,
  names: PropTypes.arrayOf(PropTypes.string),
  obj: PropTypes.shape({
    name: PropTypes.string,
    count: PropTypes.number,
  }),
};
