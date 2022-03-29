import cpsuLogo from "../assets/logos/cpsu-logo.png";
import clubLogo from "../assets/logos/cpsu-club-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-section">
          <a target="_blank" href="https://cpsu.edu.ph" rel="noreferrer">
            <img src={cpsuLogo} alt="cpsu-logo" />
          </a>

          <Link to="/">
            <img src={clubLogo} alt="club-logo" />
          </Link>
          <div className="brand-name">
            <h2>
              <Link to="/">
                CPSU PEER <br /> MENTORING CLUB
              </Link>
            </h2>
          </div>
        </div>
        <div className="nav-section">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>{" "}
            </li>
          </ul>
          <Link to="/register">
            <button className="button-secondary">Join Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
