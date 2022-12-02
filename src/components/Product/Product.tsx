import "./Product.css";

import { ProductImg } from "components";

const arrProds = [
  "product1",
  "product2",
  "product3",
  "product4",
  "product5",
  "product6",
  "product7",
  "product8",
  "product9",
];

export const Product: React.FC = () => (
  <>
    {arrProds.map((prod, index) => {
      return (
        <div key={index} className="product">
          <ProductImg prodName={prod} />
          <p className="desc">Lorem ipsum dolor sit</p>
          <p className="price">
            R$ <span className="priceValue">50,00</span>
          </p>
        </div>
      );
    })}
  </>
);
