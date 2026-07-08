import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register with Us",
      description:
        "Complete a simple registration to become a member of the Zugo Foundation community."
    },
    {
      number: "02",
      title: "Connect & Participate",
      description:
        "Join our Events, Workshops, Volunteer programs, and Connect with Inspiring people."
    },
    {
      number: "03",
      title: "Create Impact",
      description:
        "Contribute your Ideas, Skills, and Efforts to bring Positive change to society."
    },
    {
      number: "04",
      title: "Grow Together",
      description:
        "Learn, Lead, and Grow with a Strong network dedicated to Empowering communities."
    }
  ];

  return (
    <section className="how-it-works">

      <div className="how-container">

        <p className="how-label">
          HOW IT WORKS
        </p>

        <h2 className="how-title">
          Four steps.
          <br />
          <span>One Mission.</span>
        </h2>

        <div className="steps-grid">

          {steps.map((step) => (

            <div className="step-card" key={step.number}>

              <span className="step-number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;