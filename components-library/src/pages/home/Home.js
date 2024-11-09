import HeroSection from "../../components/hero-section/hero-section";
import Background from "assets/home.svg";
import "./home.scss";

const Home = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <img src={Background} alt="Home section background" />
        <HeroSection/>
      </div>
    </div>
  );
};

export default Home;
