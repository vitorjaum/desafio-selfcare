import "./Header.css";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import user from "../../assets/icons/user.png";
import glass from "../../assets/icons/glass.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo da Selfcare" className="icon" />
      </div>
      <div className="iconsList">
        <img src={glass} alt="Ícone de lupa para pesquisa" className="icon" />
        <img src={user} alt="Ícone de usuário" className="icon" />
        <img src={cart} alt="ícone de carrinho" className="icon" />
      </div>
    </header>
  );
};
