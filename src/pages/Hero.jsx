import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/Logo.jpeg"; // Replace with your logo

function Hero() {
  return (
    <section className="hero">

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      

      <div className="hero-content">

        <img
          src={logo}
          alt="Zugo Foundation"
          className="hero-logo"
        />

        <h1 className="hero-title">
          <span className="dark-text">ZUGO</span>

          <span className="zugo-gradient-text">
            FOUNDATION
          </span>
        </h1>

        <h3 className="hero-subtitle">
          Grow Your Network. Expand Your Business.
        </h3>

        <p className="hero-description">
          Connect with Industry Leaders, Entrepreneurs, Professionals, and Emerging Talent to share Ideas, Build Partnerships, and Unlock new Business Opportunities.
        </p>

        <div className="hero-buttons">

          <button className="hero-primary-btn">
            Join Us
            <FaArrowRight />
          </button>

          <button className="hero-secondary-btn">
            Learn More
            <FaArrowRight />
          </button>

        </div>

      </div>

      

    </section>
  );
}

export default Hero;