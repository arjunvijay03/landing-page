import HeroSection from "../HeroSection";
import ImageSection from "../ImageSection";
import Navbar from "../NavBar";
import StatsBar from "../StatsBar";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="leftSide">
          <div className="navHeroWrapper">
            <Navbar />
            <HeroSection />
          </div>
          <StatsBar />
        </div>
        <div className="rightSide">
          <ImageSection />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
