import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  return (

    

    <section className="contact-page">

     <Navbar />
      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>

        <div className="contact-container">

          <p className="contact-label">
            CONTACT ZUGO FOUNDATION
          </p>

          <h1 className="contact-title">
            Let's Build
            <br />
            <span>Hope Together.</span>
          </h1>

          <p className="contact-description">
           Connect with us to discover new business opportunities, build meaningful partnerships, and become part of a thriving network of entrepreneurs, professionals, and industry leaders.

          </p>

        </div>

      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="contact-info">

        <div className="contact-container">

          <div className="info-card">

            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Visit Us</h3>

            <p>
              11 (3), PN Road, 4th Street, Kumar Nagar,
              <br />
              Tiruppur, Tamil Nadu,
              <br />
              India - 641 603
            </p>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <h3>Call Us</h3>

            <p>
              +91 95970 99949
              <br />
              +91 95855 41589
            </p>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <h3>Email</h3>

            <p>
              founderszugo@gmail.com
            </p>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaClock />
            </div>

            <h3>Working Hours</h3>

            <p>
              Monday - Saturday
              <br />
              9:30 AM - 7:30 PM
            </p>

          </div>

        </div>

      </section>

      {/* ================= FORM SECTION ================= */}

      <section className="contact-form-section">

        <div className="contact-container contact-grid">

          {/* LEFT */}

          <div className="form-left">

            <p className="small-heading">
              SEND US A MESSAGE
            </p>

            <h2>
              We'd love
              <br />
              to hear from
              <span> you.</span>
            </h2>

            <p className="left-text">
              Fill out the form and our team will get back to you
              within 24 hours.
            </p>

          </div>

          {/* RIGHT */}

          <div className="form-right">

            <form>

              <div className="row">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="row">

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>

              <textarea
                rows="7"
                placeholder="Tell us how we can help you..."
              ></textarea>

              <button>

                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ===== Google Map Section Starts Here ===== */}

      {/* ================= MAP SECTION ================= */}

      <section className="map-section">

        <div className="contact-container">

          <div className="map-card">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=ZUGO+PRIVATE+LIMITED&ll=11.120529,77.3398681&z=17&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div className="contact-container">

          <div className="cta-box">

            <p className="cta-small">
  JOIN OUR NETWORK
</p>

<h2>
  Together We Can
  <br />
  <span>Grow Businesses.</span>
</h2>

<p>
  Connect with entrepreneurs, professionals, and business leaders to
  build valuable partnerships, explore new opportunities, and achieve
  sustainable growth together.
</p>

<div className="cta-buttons">

  <button className="primary-btn">
    Join the Network
  </button>

  <button className="secondary-btn">
    Explore Opportunities
  </button>

</div>
          </div>

        </div>

      </section>

      {/* ================= CONTACT STRIP ================= */}

      <section className="contact-strip">

        <div className="contact-container strip-content">

          <div>

            <h3>
              Still have questions?
            </h3>

            <p>
              We're just one message away.
            </p>

          </div>

          <a
            href="mailto:founderszugo@gmail.com"
            className="strip-button"
          >
            Contact Us →
          </a>

        </div>

      </section>

      <Footer />

    </section>

    
  );

}

export default Contact;