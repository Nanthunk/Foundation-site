import Navbar from "../components/Navbar";
import "./Events.css";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Events() {
  return (
    <section className="events-page">

        <Navbar />

      {/* ================= HERO ================= */}

      <section className="events-hero">

        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>
        <div className="hero-circle circle3"></div>

        <div className="events-container">

          <p className="events-label">
            ZUGO FOUNDATION EVENTS
          </p>

          <h1 className="events-title">
            Inspiring Change,
            <br />
            <span>One Event At A Time.</span>
          </h1>

          <p className="events-description">
            Explore exclusive networking sessions, business seminars, partnership opportunities, and community events that foster innovation and sustainable business growth.

          </p>

          <a href="#upcoming" className="events-btn">
            Explore Events
            <FaArrowRight />
          </a>

        </div>

      </section>

      {/* ================= FEATURED EVENT ================= */}

      <section className="featured-event">

        <div className="events-container">

          <div className="section-heading">

            <p>FEATURED EVENT</p>

            <h2>
              Our Biggest
              <span> Community Initiative</span>
            </h2>

          </div>

          <div className="featured-grid">

            <div className="featured-image">

              <img
                src="/images/event1.jpg"
                alt="Featured Event"
              />

            </div>

            <div className="featured-content">

              <h2>
                 Empowerment Program 2026
              </h2>

              <div className="event-meta">

                <span>
                  <FaCalendarAlt />
                  We'll Update the Date Soon
                </span>

                <span>
                  <FaMapMarkerAlt />
                  We'll Update the Location Soon
                </span>

              </div>

              <p>

  Join a thriving network of entrepreneurs, business owners,
  and professionals to build meaningful connections, discover
  new opportunities, and grow together through collaboration.

</p>

<ul>

  <li>✔ 100+ Business Professionals Connected</li>

  <li>✔ Exclusive Networking Events</li>

  <li>✔ Strategic Partnership Opportunities</li>

  <li>✔ Business Growth & Mentorship</li>

</ul>

              <a
                href="https://wa.me/919585541589?text=Hi%20ZUGO%20Foundation,%20I%20want%20to%20register%20for%20the%20Empowerment%20Program."
                target="_blank"
                rel="noreferrer"
                className="register-btn"
              >

                <FaWhatsapp />

                Register via WhatsApp

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= UPCOMING EVENTS ================= */}

      <section
        className="upcoming-events"
        id="upcoming"
      >

        <div className="events-container">

          <div className="section-heading">

            <p>UPCOMING EVENTS</p>

            <h2>

              Join Our
              <span> Upcoming Programs</span>

            </h2>

          </div>

          <div className="events-grid">

            {/* Card 1 */}

            <div className="event-card">

              <img
                src="/images/event2.jpg"
                alt="Event 2"
              />

              <div className="event-content">

                <h3>Event 2</h3>

                <p className="date">

                  <FaCalendarAlt />

                  We'll Update the Date Soon

                </p>

                <p className="location">

                  <FaMapMarkerAlt />

                  We'll Update the Location Soon

                </p>

                    {/* <p>

                      Plant 1000+ trees and contribute towards
                      a greener future.

                    </p> */}

                <a href="#">
                  Register
                </a>

              </div>

            </div>

            {/* Card 2 */}

            <div className="event-card">

              <img
                src="/images/event3.jpg"
                alt="Event 3"
              />

              <div className="event-content">

                <h3>Event 3</h3>

                <p className="date">

                  <FaCalendarAlt />

                  We'll Update the Date Soon

                </p>

                <p className="location">

                  <FaMapMarkerAlt />

                  We'll Update the Location Soon

                </p>

                    {/* <p>

                  Save lives by participating in our annual
                  blood donation drive.

                    </p> */}

                <a href="#">
                  Register
                </a>

              </div>

            </div>

            {/* Card 3 */}

            <div className="event-card">

              <img
                src="/images/event4.jpg"
                alt="Event 4"
              />

              <div className="event-content">

                <h3>Event 4</h3>

                <p className="date">

                  <FaCalendarAlt />

                  We'll Update the Date Soon

                </p>

                <p className="location">

                  <FaMapMarkerAlt />

                  We'll Update the Location Soon

                </p>

                {/* <p>

                  Skill development and entrepreneurship
                  training for women.

                </p> */}

                <a href="#">
                  Register
                </a>

              </div>

            </div>

            {/* Card 4 */}

            <div className="event-card">

              <img
                src="/images/event5.jpg"
                alt="Event 5"
              />

              <div className="event-content">

                <h3>Event 5</h3>

                <p className="date">

                  <FaCalendarAlt />

                  We'll Update the Date Soon

                </p>

                <p className="location">

                  <FaMapMarkerAlt />

                  We'll Update the Location Soon

                </p>

                {/* <p>

                  Help distribute food kits to families in
                  need across the city.

                </p> */}

                <a href="#">
                  Register
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========= Part 2 Starts Below ========= */}

            {/* ================= IMPACT ================= */}

      <section className="impact-section">

        <div className="events-container">

          <div className="section-heading">

            <p>OUR IMPACT</p>

            <h2>
              Creating Change
              <span> Together</span>
            </h2>

          </div>

          <div className="impact-grid">

            <div className="impact-card">
              <h2>10+</h2>
              <p>Small Events Conducted</p>
            </div>

            <div className="impact-card">
              <h2>1 K+</h2>
              <p>Lives Impacted</p>
            </div>

            <div className="impact-card">
              <h2>150+</h2>
              <p>Volunteers</p>
            </div>

            <div className="impact-card">
              <h2>35+</h2>
              <p>Communities Served</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery-section">

        <div className="events-container">

          <div className="section-heading">

            <p>EVENT GALLERY</p>

            <h2>
              Memories That
              <span> Inspire</span>
            </h2>

          </div>

          <div className="gallery-grid">

            <img src="/images/gallery1.jpg" alt="Gallery 1" />
            <img src="/images/gallery2.jpg" alt="Gallery 2" />
            <img src="/images/gallery3.jpg" alt="Gallery 3" />
            <img src="/images/gallery4.jpg" alt="Gallery 4" />
            <img src="/images/gallery5.jpg" alt="Gallery 5" />
            <img src="/images/gallery6.jpg" alt="Gallery 6" />

          </div>

        </div>

      </section>

      {/* ================= EVENT TIMELINE ================= */}

      <section className="timeline-section">

        <div className="events-container">

          <div className="section-heading">

            <p>UPCOMING SCHEDULE</p>

            <h2>
              What's Coming
              <span> Next?</span>
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>2027</h3>

                <h4>Wait for the Future Updates</h4>

                <p>
                  Get Ready for the Upcoming Events
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>2027</h3>

                <h4>Wait for the Future Updates</h4>

                <p>
                  Get Ready for the Upcoming Events
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>2027</h3>

                <h4>Wait for the Future Updates</h4>

                <p>
                  Get Ready for the Upcoming Events
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>2027</h3>

                <h4>Wait for the Future Updates</h4>

                <p>
                  Get Ready for the Upcoming Events
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="events-faq">

        <div className="events-container">

          <div className="section-heading">

            <p>EVENT FAQ</p>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>

          <div className="faq-grid">

            <div className="faq-card">
              <h3>Who can participate?</h3>
              <p>
                Everyone is Welcome to join Our events,
                regardless of Age or Profession.
              </p>
            </div>

            <div className="faq-card">
              <h3>Is registration mandatory?</h3>
              <p>
                Yes. Registration helps us Organize the event
                and Manage volunteers efficiently.
              </p>
            </div>

            <div className="faq-card">
              <h3>Are events free? or Paid?</h3>
              <p>
                Most of our community events are completely free
                and Some are Paid based on our policies.
              </p>
            </div>

            <div className="faq-card">
              <h3>How do I get Event passes?</h3>
              <p>
                Simply register through WhatsApp and our team
                will contact you.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="events-cta">

        <div className="events-container">

          <div className="cta-content">

            <p>JOIN OUR NEXT EVENT</p>

            <h2>

              Together We Can
              <span> Build Stronger Communities.</span>

            </h2>

            <p className="cta-text">

              Become a Member, participate in meaningful
              programs and create a positive impact with
              ZUGO Foundation.

            </p>

            <a
              href="https://wa.me/919585541589?text=Hi%20ZUGO%20Foundation,%20I%20would%20like%20to%20volunteer%20for%20your%20upcoming%20events."
              target="_blank"
              rel="noreferrer"
              className="events-whatsapp-btn"
            >

              <FaWhatsapp />

              Register via WhatsApp

            </a>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Events;