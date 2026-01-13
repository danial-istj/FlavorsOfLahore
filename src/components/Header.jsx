import { Link } from "react-router-dom";
import { toggleDarkMode } from "../utils/darkMode";

const Header = () => {
  return (
    <header className="header">
      <img src="images/header.png" className="banner" />

      <div className="logo-section">
        <img src="images/logo.png" alt="Restaurant Logo" className="logo" />
      </div>

      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservation" className="nav-link">Reservation</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>

        <button
          className="button"
          id="toggleDarkMode"
          style={{ right: "10px", position: "absolute" }}
          onClick={toggleDarkMode}
        >
          🌙 Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
