import React from "react";
import Product from "../../components/Product/Product";
import "./Main.css";

import product1 from "./../../assets/product1.jpg";
import product2 from "./../../assets/product2.jpg";
import product3 from "./../../assets/product3.jpg";
import product4 from "./../../assets/product4.jpg";
import product5 from "./../../assets/product5.jpg";
import product6 from "./../../assets/product6.jpg";
import product7 from "./../../assets/product7.jpg";
import product8 from "./../../assets/product8.jpg";
import product9 from "./../../assets/product9.jpg";

const arrProds = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product9,
  product9,
];
const Main = () => {
  return (
    <main>
      <div className="titles">
        <p id="promocao">PROMOÇÃO</p>
        <p>9 produtos</p>
      </div>
      <section className="products-grid">
        <Product />
      </section>
    </main>
  );
};

export default Main;
