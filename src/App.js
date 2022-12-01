import { Header, Footer, MainScreen } from "containers";
import "./App.css";
import banner from "./assets/banner.png";

function App() {
  return (
    <>
      <Header />
      <div>
        <img src={banner} className="banner" alt="Banner do site" />
      </div>
      <MainScreen />
      <Footer />
    </>
  );
}

export default App;
