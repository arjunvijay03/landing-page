import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from ".././../assets/Image1.png";
import image2 from ".././../assets/Image2.png";
import image3 from ".././../assets/Image3.png";
const HeroSection = () => {
  return (
    <section className="heroSection">
      <h1 className="heroTitle">
        LEARN GRAPHICS <br /> DESIGN FOR LIFE
        <span className="heroIcon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </h1>
      <p className="heroSubtitle">
        Stay Informed, Stay Ahead. Unveiling the Future of Technology, Gadgets,
        and Innovation
        <p>
          Your Gateway to the Digital Universe - Where Innovation Meets Insight
        </p>
      </p>

      <div className="heroStats">
        <div>
          <span className="heroStatNumber">5.1 K</span>
          <div className="heroStatText">
            Students All <br /> Over World
          </div>
        </div>
        <div className="heroAvatars">
          <img src={image3} alt="Student 3" className="heroAvatar" />
          <img src={image2} alt="Student 2" className="heroAvatar" />
          <img src={image1} alt="Student 1" className="heroAvatar" />
        </div>
      </div>
      <div className="heroButtons">
        <button className="bookSeatBtn">Book Your Seat</button>
        <button className="seeJourneyBtn">
          <span className="playIcon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
          See Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
