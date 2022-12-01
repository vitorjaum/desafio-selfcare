import { Product } from "components";
import "./MainScreen.css";

export const MainScreen = () => {
  return (
    <div>
      <div className="titles">
        <p id="promocao">PROMOÇÃO</p>
        <p>9 produtos</p>
      </div>
      <section className="products-grid">
        <Product />
      </section>
    </div>
  );
};
