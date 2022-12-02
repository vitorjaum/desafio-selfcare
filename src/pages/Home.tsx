import { Footer, Header, MainScreen } from "containers";
import banner from "assets/banner.png";
import "./Home.css";

export const Home: React.FC = () => {
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
};
