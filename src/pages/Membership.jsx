import Navbar from "../components/Navbar";
import "./Membership.css";

import {
  FaUsers,
  FaHandshake,
  FaAward,
  FaHeart,
  FaWhatsapp,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function Membership() {
  return (
    <section className="membership-page">

        <Navbar />

      {/* ================= HERO ================= */}

      <section className="membership-hero">

        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>
        <div className="hero-circle circle3"></div>

        <div className="membership-container">

          <p className="membership-label">
            ZUGO FOUNDATION MEMBERSHIP
          </p>

          <h1 className="membership-title">
            Become a
            <br />
            <span>Change Maker.</span>
          </h1>

          <p className="membership-description">
            Become part of a thriving business network where entrepreneurs and professionals connect, collaborate, and create opportunities for long-term success.

          </p>

          <a href="#plans" className="join-btn">
            Explore Membership
            <FaArrowRight />
          </a>

        </div>

      </section>

      {/* ================= WHY JOIN ================= */}

      <section className="why-member">

        <div className="membership-container">

          <div className="section-heading">

            <p>WHY JOIN US</p>

            <h2>
              More Than A Membership,
              <span> It's A Movement.</span>
            </h2>

          </div>

          <div className="why-grid">

            <div className="why-card">

              <FaHeart className="why-icon" />

              <h3>Make Real Impact</h3>

              <p>
                Support Meaningful initiatives that improve lives and
                Strengthen Communities.
              </p>

            </div>

            <div className="why-card">

              <FaUsers className="why-icon" />

              <h3>Community Network</h3>

              <p>
                Connect with Professionals, Volunteers and Leaders who
                share your passion.
              </p>

            </div>

            <div className="why-card">

              <FaHandshake className="why-icon" />

            
<h3>Strategic Partnerships</h3>

<p>
  Discover Partnerships that drive Innovation, Business
  expansion, and Long-term success.
</p>



            </div>

            <div className="why-card">

              <FaAward className="why-icon" />

              <h3>Recognition</h3>

              <p>
                Receive Official Membership recognition and Exclusive
                Foundation benefits.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MEMBERSHIP PLANS ================= */}

      <section className="plans-section" id="plans">

        <div className="membership-container">

          <div className="section-heading">

            <p>MEMBERSHIP PLANS</p>

            <h2>
              Choose Your
              <span> Membership</span>
            </h2>

          </div>

          <div className="plans-grid">

            {/* 6 MONTHS */}

            <div className="plan-card">

              <h3>6 Months</h3>

              <div className="price">

                ₹8,000

              </div>

              <p className="plan-subtitle">
                Perfect for getting started
              </p>

              <ul>

                <li>
                  <FaCheckCircle />
                  Foundation Membership
                </li>

                <li>
                  <FaCheckCircle />
                  Volunteer Opportunities
                </li>

                <li>
                  <FaCheckCircle />
                  Event Invitations
                </li>

                <li>
                  <FaCheckCircle />
                  Member Certificate
                </li>

                <li>
                  <FaCheckCircle />
                  WhatsApp Support
                </li>

              </ul>

              <a
                className="whatsapp-btn"
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/919585541589?text=Hi%20ZUGO%20Foundation,%20I%20Saw%20your%20Website%20now,%20and%20I%20would%20like%20to%20join%20the%206%20Months%20Membership%20(₹8,000).%20Please%20share%20the%20payment%20details."
              >
                <FaWhatsapp />

                Join via WhatsApp

              </a>

            </div>

            {/* 1 YEAR */}

            <div className="plan-card featured">

              <div className="popular">

                MOST POPULAR

              </div>

              <h3>1 Year</h3>

              <div className="price">

                ₹15,000

              </div>

              <p className="plan-subtitle">
                Best value for long-term impact
              </p>

              <ul>

                <li>
                  <FaCheckCircle />
                  Everything in 6 Months
                </li>

                <li>
                  <FaCheckCircle />
                  VIP Event Access
                </li>

                <li>
                  <FaCheckCircle />
                  Leadership Programs
                </li>

                <li>
                  <FaCheckCircle />
                  Exclusive Workshops
                </li>

                <li>
                  <FaCheckCircle />
                  Priority Invitations
                </li>

                <li>
                  <FaCheckCircle />
                  Annual Recognition
                </li>

              </ul>

              <a
                className="whatsapp-btn"
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/919585541589?text=Hi%20ZUGO%20Foundation,%20I%20Saw%20your%20Website%20now,%20and%20I%20would%20like%20to%20join%20the%20Annual%20Membership%20(₹15,000).%20Please%20share%20the%20payment%20details."
              >
                <FaWhatsapp />

                Join via WhatsApp

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ===== Part 2 Starts From Here ===== */}

            {/* ================= HOW IT WORKS ================= */}

      <section className="membership-process">

        <div className="membership-container">

          <div className="section-heading">

            <p>HOW IT WORKS</p>

            <h2>
              Joining Is
              <span> Simple</span>
            </h2>

          </div>

          <div className="process-grid">

            <div className="process-card">

              <div className="process-number">01</div>

              <h3>Select a Plan</h3>

              <p>
                Choose the membership plan that best suits your commitment
                to creating social impact.
              </p>

            </div>

            <div className="process-card">

              <div className="process-number">02</div>

              <h3>Chat on WhatsApp</h3>

              <p>
                Click the WhatsApp button and connect directly with our
                membership team.
              </p>

            </div>

            <div className="process-card">

              <div className="process-number">03</div>

              <h3>Complete Payment</h3>

              <p>
                Our team will share the payment details and complete your
                registration quickly.
              </p>

            </div>

            <div className="process-card">

              <div className="process-number">04</div>

              <h3>Welcome to ZUGO</h3>

              <p>
                Receive your membership confirmation, certificate and enjoy
                exclusive member benefits.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MEMBER BENEFITS ================= */}

      <section className="benefits-section">

        <div className="membership-container">

          <div className="section-heading">

            <p>MEMBER BENEFITS</p>

            <h2>

              Why Members
              <span> Love ZUGO</span>

            </h2>

          </div>

          <div className="benefits-grid">

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Official Membership Certificate</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Exclusive Foundation Events</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Networking Opportunities</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Volunteer Participation</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Leadership Programs</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Priority Invitations</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Foundation Merchandise</span>
            </div>

            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <span>Continuous Community Support</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="membership-faq">

        <div className="membership-container">

          <div className="section-heading">

            <p>FAQ</p>

            <h2>

              Frequently Asked
              <span> Questions</span>

            </h2>

          </div>

          <div className="faq-list">

            <div className="faq-item">
              <h3>Can anyone become a member?</h3>
              <p>
                Yes. Anyone who wishes to contribute to social development
                and support our mission can become a member.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I make the payment?</h3>
              <p>
                Once you contact us through WhatsApp, we'll provide secure
                payment details and guide you through the process.
              </p>
            </div>

            <div className="faq-item">
              <h3>Will I receive a membership certificate?</h3>
              <p>
                Yes. Every approved member receives an official digital
                membership certificate from ZUGO Foundation.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I renew my membership?</h3>
              <p>
                Absolutely. You can renew your membership before it expires
                to continue enjoying all member benefits.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="membership-cta">

        <div className="membership-container">

          <div className="cta-content">

            <p>START MAKING AN IMPACT TODAY</p>

            <h2>

              Together We Can
              <span> Build A Better Tomorrow.</span>

            </h2>

            <p className="cta-text">

              Join thousands of passionate individuals who are working
              together to create lasting positive change in society.

            </p>

            <a
              className="cta-whatsapp"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/919585541589?text=Hi%20ZUGO%20Foundation,%20I%20Saw%20your%20Website%20now,%20and%20I%20would%20like%20to%20become%20a%20member.%20Please%20guide%20me."
            >

              <FaWhatsapp />

              Become a Member

            </a>

          </div>

        </div>

      </section>

    </section>

  );
}

export default Membership;