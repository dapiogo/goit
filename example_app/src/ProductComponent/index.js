import PropTypes from 'prop-types';

export const ProductComponent = (props) => {
  const {
    image = 'https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png',
    name,
    size,
    color,
    delivery,
    description,
  } = props;

  const addToCart = () => {
    // Logika dodawania produktu do koszyka
    console.log('Dodano produkt do koszyka:', name);
  };

  return (
    <div className="productSecond">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Rozmiar: {size}</p>
      <p>Kolor: {color}</p>
      <p>Dostawa: {delivery}</p>
      <p>{description}</p>
      <button onClick={addToCart}>Dodaj do koszyka</button>
    </div>
  );
};

ProductComponent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

//dodatkowo mozna zrobic PropTypes.string.isRequired, -> czyli musimy podac tego propsa nawet jak mamy
//default value to nam to nie pomoze bo bedzie blad
