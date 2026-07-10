import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={scrolled ? "navbar navbar-scroll" : "navbar"}>
        <div className="navbar-container">

          {/* Logo */}
          <Link to="/" className="logo">
            Zugo Foundation
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/events">Events</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Right Section */}
          <div className="right-section">

            <Link
  to="/membership"
  className="membership-link"
  onClick={closeMenu}
>
  <button className="donate-btn">
    Membership
  </button>
</Link>

            <div
              className="menu-icon"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <div
          className="close-btn"
          onClick={closeMenu}
        >
          <FaTimes />
        </div>

        <Link to="/" onClick={closeMenu}>
           Home
        </Link>

        <Link to="/events" onClick={closeMenu}>
         Events
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
           Gallery
        </Link>

        <Link to="/contact" onClick={closeMenu}>
           Contact
        </Link>
       
        <Link
  to="/membership"
  className="membership-link"
  onClick={closeMenu}
>
  <button className="donate-btn">
    Membership
  </button>
</Link>

      </div>
    </>
  );
}

export default Navbar;