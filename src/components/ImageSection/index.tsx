import "./style.css";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
const ImageSection = () => {
  return (
    <div className="imageSectionContainer">
      <div className="imageGrid">
        <img className="circleImage" src={image4} alt="" />
        <img className="squreImage" src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img className="circleImage" src={image8} alt="" />
        <img className="squreImage" src={image9} alt="" />
      </div>
    </div>
  );
};

export default ImageSection;
