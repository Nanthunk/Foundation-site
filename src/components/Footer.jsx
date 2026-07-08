import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

  <h2 className="footer-logo">
    <span className="blue-dot"></span>
    ZUGO <span>Foundation</span>
  </h2>

  <p>
    Connecting Entrepreneurs, Professionals, and Business leaders
    through meaningful Networking, Collaboration, and Growth
    Opportunities.
  </p>

  <div className="footer-social">

    <a href="#">
      <FaFacebookF />
    </a>

    <a href="#">
      <FaLinkedinIn />
    </a>

    <a href="#">
      <FaInstagram />
    </a>

    <a href="#">
      <FaTwitter />
    </a>

  </div>

</div>

{/* Quick Links */}

<div className="footer-links">

  <h4>Quick Links</h4>

  <a href="#">Home</a>

  <a href="#">About</a>

  <a href="#">Networking</a>

  <a href="#">Events</a>

  <a href="#">Contact</a>

</div>

{/* Contact */}

<div className="footer-links">

  <h4>Contact</h4>

  <a href="mailto:founderszugo@gmail.com">
    founderszugo@gmail.com
  </a>

  <a href="tel:+919585541589">
    +91 95855 41589
  </a>

  <a href="#">
    Tiruppur, Tamil Nadu
  </a>

</div>


      </div>

      {/* Divider */}

      <div className="footer-divider"></div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 ZUGO Foundation. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms & Conditions</a>
  </div>

        <p>
          By the ZUGO Team
        </p>

      </div>

      {/* Huge Logo */}

      <div className="footer-brand">

        ZUGO<span>.</span>

      </div>

    </footer>
  );
}

export default Footer;