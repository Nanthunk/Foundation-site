import "./WhyZugo.css";

function WhyZugo() {

  const cards = [
    {
      number: "01",
      title: "Powerful Connections",
  description:
    "Connecting founders, professionals, investors, and industry leaders to build meaningful partnerships and long-term success."
    },
    {
      number: "02",
      title: "Business Development",
      description:
        "Helping entrepreneurs and businesses scale through strategic networking, collaboration, and growth opportunities."
    },
    {
      number: "03",
      title: "Sustainable Growth",
      description:
        "Creating long-term opportunities through entrepreneurship, innovation, and leadership development."
    }
  ];

  return (

    <section className="why-zugo">

      <div className="why-container">

        <p className="section-tag">
          WHY ZUGO FOUNDATION
        </p>

        <h2 className="why-title">

          Together we create

          <span className="gradient-text">
            {" "}Hope, Impact & Change.
          </span>

        </h2>

        <div className="why-cards">

          {cards.map((card) => (

            <div className="why-card" key={card.number}>

              <span className="card-number">
                {card.number}
              </span>

              <h3>
                {card.title}
              </h3>

              <p>
                {card.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhyZugo;