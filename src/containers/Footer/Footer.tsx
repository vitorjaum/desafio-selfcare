import "./Footer.css";

import { Icon } from "components";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="links">
          <p>Contato</p>
          <p>Termos de serviço</p>
          <p>Política de privacidade</p>
          <p>Cancelamento, troca e reembolso</p>
        </nav>
        <form action="footer.jsx" className="newsletter">
          <label htmlFor="newsletter">Newsletter</label>
          <div className="newsletter-inputs">
            <input
              placeholder="Digite seu melhor e-mail"
              type="text"
              name="newsletter"
              id="newsletter-text"
              title="newsletter"
            />
            <input id="btn-register" value={"Inscrever"} type="button" />
          </div>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <Icon iconName={"facebook"} />
          <Icon iconName={"instagram"} />
        </div>
        <div className="bank-icons">
          <Icon iconName={"mastercard"} />
          <Icon iconName={"paypal"} />
          <Icon iconName={"visa"} />
        </div>
      </div>
    </footer>
  );
};
