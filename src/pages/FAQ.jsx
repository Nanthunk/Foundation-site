import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
  {
    question: "What is ZUGO Foundation?",
    answer:
      "ZUGO Foundation is a Business networking platform that connects Entrepreneurs, Business owners, Professionals, and Industry leaders to foster Collaboration, Innovation, and Sustainable business Growth."
  },
  {
    question: "Who can join the Foundation?",
    answer:
      "Entrepreneurs, Startup founders, Business owners, Professionals, Investors, and anyone looking to expand their network and create meaningful business opportunities are Welcome to join."
  },
  {
    question: "How does the Foundation help businesses grow?",
    answer:
      "We create opportunities through Networking events, Strategic partnerships, Knowledge-sharing sessions and Mentorship that help businesses scale and succeed."
  },
  {
    question: "Can I collaborate with other members?",
    answer:
      "Yes. Our platform encourages members to connect, Exchange ideas, Build partnerships, and Work together on projects that create mutual business success."
  },
  {
    question: "Does ZUGO Foundation organize networking events?",
    answer:
      "Absolutely. We regularly host Business meetups, Networking sessions, Workshops, Seminars, and Industry events where members can Connect, Learn, and Grow together."
  },
  {
    question: "How can I become a member?",
    answer:
      "Simply register through our website to become part of the ZUGO Foundation community. Once registered, you'll gain access to Networking opportunities, Events, Collaborations, and Exclusive business resources."
  }
];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section className="faq">

      <div className="faq-container">

        {/* Left */}

        <div className="faq-left">

          <p className="faq-label">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="faq-title">
            Have Questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p className="faq-text">
            Learn how ZUGO Foundation connects Entrepreneurs, Professionals,
  and Business leaders through Networking, Collaboration, and
  Opportunities that inspire long-term Growth and Success.
          </p>

        </div>

        {/* Right */}

        <div className="faq-right">

          {faqData.map((item, index) => (

            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <h3>{item.question}</h3>

                <span>

                  {activeIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}

                </span>

              </div>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default FAQ;