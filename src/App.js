import React from "react";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import banner from "./assets/banner.png";

function App() {
  return (
    <>
      <Header />
      <div>
        <img src={banner} />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
