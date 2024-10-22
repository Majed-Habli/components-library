import Navbar from "../../components/Navbar/DefaultNavbar/DefaultNavbar";
import Background from "assets/home.svg";
import "./home.scss";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="hero-section">
        <img src={Background} alt="Home section background" />
      </div>
    </div>
  );
};

export default Home;
