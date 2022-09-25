import React from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import banner from "./assets/banner.png";

function App() {
  return (
    <>
      <Header />
      <div>
        <img src={banner} className="banner" />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
