import "./Features.css";
import {
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaBuilding,
  FaUserTie,
  FaGlobe,
  FaBullhorn,
  FaRocket,
  FaNetworkWired,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaHandshake />,
      title: "Business Networking",
      description:
        "Connect with Entrepreneurs, Founders, and Professionals to build valuable Business Relationships.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      description:
        "Discover opportunities that help startups and established Businesses Grow Sustainably.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Hub",
      description:
        "Share Ideas, Explore new Technologies, and Collaborate on Innovative business solutions.",
    },
    {
      icon: <FaBuilding />,
      title: "Strategic Partnerships",
      description:
        "Build long-term partnerships with Organizations, Investors, and Industry leaders.",
    },
    {
      icon: <FaUserTie />,
      title: "Leadership Development",
      description:
        "Learn from experienced business leaders through Mentorship and Networking events.",
    },
    {
      icon: <FaBriefcase />,
      title: "Entrepreneur Support",
      description:
        "Helping startups and Entrepreneurs with Guidance, Resources, and Business opportunities.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Connections",
      description:
        "Expand your professional network by connecting with businesses across Industries and Regions.",
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Visibility",
      description:
        "Promote your business through Community events, Collaborations, and Networking initiatives.",
    },
    {
      icon: <FaRocket />,
      title: "Startup Acceleration",
      description:
        "Accelerate your business journey with Expert guidance, Collaboration, and Growth opportunities.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Collaborative Ecosystem",
      description:
        "Be part of a trusted ecosystem where businesses grow together through Partnership.",
    },
    {
      icon: <FaUsers />,
      title: "Professional Community",
      description:
        "Join a thriving community of Entrepreneurs, Professionals, and Business innovators.",
    },
    {
      icon: <FaAward />,
      title: "Success Recognition",
      description:
        "Celebrate Achievements and Inspire Excellence through Awards and Community recognition.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">

        <p className="features-label">
          EVERYTHING WE OFFER
        </p>

        <h2 className="features-title">
          Twelve reasons
          <br />
          <span>to grow with our network.</span>
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;