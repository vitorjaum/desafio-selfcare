import React from "react";
import "./Footer.css";
import facebook from "./../../assets/icons/facebook.png";
import instagram from "./../../assets/icons/instagram.png";
import paypal from "./../../assets/icons/paypal.png";
import mastercard from "./../../assets/icons/mastercard.png";
import visa from "./../../assets/icons/visa.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="links">
          <p>Contato</p>
          <p>Termos de serviço</p>
          <p>Política de privacidade</p>
          <p>Cancelamento, troca e reembolso</p>
        </nav>
        <nav className="newsletter">
          <input
            placeholder="Digite seu melhor e-mail"
            type="text"
            name=""
            id=""
          />
          <button>Inscrever</button>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="socials">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="bank-icons">
          <img src={paypal} alt="" />
          <img src={mastercard} alt="" />
          <img src={visa} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
