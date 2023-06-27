import PropTypes from 'prop-types';

export const ExampleWithProps = (props) => {
  const { textProp, numberProp, arrayProp, objectProp, boolProp } = props;
  console.log(arrayProp);
  return (
    <div>
      {textProp && <div>tekst prop: {textProp} </div>}
      {numberProp && <div>number prop: {numberProp} </div>}
      {arrayProp && <div>array prop: {arrayProp} </div>}
      {objectProp && <div>object prop {JSON.stringify(objectProp)} </div>}
      {boolProp && <div>boolProp prop: {`${boolProp}`} </div>}
    </div>
  );
};

ExampleWithProps.propTypes = {
  textProp: PropTypes.string,
  numberProp: PropTypes.number,
  arrayProp: PropTypes.array,
  objectProp: PropTypes.object,
  boolProp: PropTypes.bool,
};
