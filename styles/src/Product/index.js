import css from "./Product.module.css";

import offers from "../oferty.json";

export const Product = () => {
  console.log(offers);

  console.log(offers.image, offers.name);
  return (
    <div>
      ddasd
      <img src={offers[0].image} width="100px" height="100px" />
      ssss
      <div className={css.alert}>Produkt</div>
    </div>
  );
};
