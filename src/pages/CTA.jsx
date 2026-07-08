import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Left Content */}

        <div className="cta-content">

          <p className="cta-label">
            ONE LAST THING
          </p>

          <h2 className="cta-title">
            Come build with
            <br />
            <span>purpose & impact.</span>
          </h2>

          <p className="cta-description">
            Join ZUGO Foundation to build valuable Business Relationships, Collaborate with Industry Leaders, and Accelerate your journey toward the Growth.
          </p>

        </div>

        {/* Right Form */}

        <div className="cta-form">

          <form>

            <div className="input-group">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="tel"
                placeholder="Phone Number"
              />

            </div>

            <button type="submit">
              Join Our Community →
            </button>

            <small>
              Trusted ••• Business Focused ••• Growth Driven
            </small>

          </form>

        </div>

      </div>

    </section>
  );
}

export default CTA;