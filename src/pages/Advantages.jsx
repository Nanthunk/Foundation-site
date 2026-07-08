import "./Advantages.css";
import eventImage from "../assets/logo.jpeg"; 

function Advantages() {
  return (
    <section className="advantages">

      <div className="advantages-container">

        <p className="section-label">
          WHAT WE DO
        </p>

        <h2 className="advantages-title">
  Building
  <span> powerful networks </span>
  to create
  <span> growth & success.</span>
</h2>

        <div className="advantages-grid">

          {/* Large Card */}

          <div className="card large">

            <span className="card-tag">
              01 — BUSINESS NETWORKING
            </span>

            <h3>
              Connecting entrepreneurs,
founders, and professionals through
meaningful networking opportunities.
            </h3>

            <img
              src={eventImage}
              alt="Education"
            />

          </div>

          {/* Black Card */}

          <div className="card dark">

            <span className="card-tag white">
              02 — INDUSTRY COLLABORATION 
            </span>

            <h3>
              Bringing together
business leaders to share knowledge
and unlock new opportunities.
            </h3>

            

          </div>

          {/* White Card */}

          <div className="card">

            <span className="card-tag">
              03 — ENTREPRENEURSHIP
            </span>

            <h3>
              Helping young entrepreneurs
              with mentoring, networking and
              business opportunities.
            </h3>

          </div>

          {/* Small */}

          <div className="card small">

            <span className="card-tag">
              04 — EMPOWERMENT
            </span>

            <h4>
              Empowering businesses with
              strategic partnerships and
              valuable industry connections.
            </h4>

          </div>

          {/* Small */}

          <div className="card small">

            <span className="card-tag">
              05 — GROWTH & INNOVATION
            </span>

            <h4>
              Empowering businesses
through strategic partnerships,
innovation, and sustainable growth.
            </h4>

          </div>

          {/* Blue */}

          <div className="card blue">

            <span className="card-tag white">
              06 — COMMUNITY
            </span>

            <h4>
              Bringing people together
              to create lasting positive
              social impact.
            </h4>

              

          </div>

        </div>

      </div>

    </section>
  );
}

export default Advantages;