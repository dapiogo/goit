import PropTypes from 'prop-types';

const Description = ({ description }) => {
  return <div>Opis Produktu : {description}</div>;
};

Description.propTypes = {
  description: PropTypes.string,
};

const Name = (props) => {
  const { title, secondTitle } = props;
  return (
    <div>
      <div>Nazwa Produktu : {title}</div>
      <div>Podtytul : {secondTitle}</div>
    </div>
  );
};

Name.propTypes = {
  title: PropTypes.string,
  secondTitle: PropTypes.string,
};

const Count = (props) => {
  const { count } = props;
  return (
    <div>
      <div>Ilosc produktu {count}</div>
    </div>
  );
};

Count.propTypes = {
  count: PropTypes.number,
};

export const Product = ({
  title = 'domyslny title',
  secondTitle,
  description = 'domyslny opis',
  count = 100,
}) => {
  return (
    <div className="product">
      <Name title={title} secondTitle={secondTitle} />
      <Description description={description} />
      <Count count={count}>
        <div>
          <div>liczenie ilosci {count}</div>
          <button>kup</button>
        </div>
      </Count>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number,
};
