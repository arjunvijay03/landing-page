import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarBrand">
        <span className="navbarLogo">
          <FontAwesomeIcon icon={faBookOpen} />
        </span>
        <span>Hello World!</span>
      </div>
      <ul className="navbarLinks">
        <li>
          <a href="#">Course</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
