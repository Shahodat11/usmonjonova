import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Screenshot_33.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-shrink");
      } else {
        navbar.classList.remove("navbar-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="nav-link">
            <img className="navbar__logo" src={logo} alt="" />
          </div>
          <nav className="nav" id="navbar">
            <ul
              className={`nav-items ${isOpen ? "open" : ""}`}
              id="navbar-responsive"
            >
              <NavLink to={`/`}>
                <li>
                  <a id="home" href="#">
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink id="aboutUs" to={`/aboutUs`}>
                <li>
                  <a href="#">About</a>
                </li>
              </NavLink>
              <NavLink to="/project">
                <li>
                  <a href="#">Projects</a>
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li>
                  <a href="#">Contact</a>
                </li>
              </NavLink>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="menu-btn" id="menu-btn" onClick={toggleNavbar}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
