import PropTypes from 'prop-types';

export const ExampleWithChildren = ({ children, title }) => {
  return (
    <div>
      <p>Komponent z uzyciem: {title}</p>
      {children ? (
        <div>Dziecko przekazane : {children}</div>
      ) : (
        <div>Brak dziecka przekazanego</div>
      )}
    </div>
  );
};

ExampleWithChildren.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

// Typ PropTypes.node w bibliotece prop-types jest używany do określenia,
// że prop może przyjąć dowolny element JSX (np. <div>, <span>, <CustomComponent />) lub tekst.
