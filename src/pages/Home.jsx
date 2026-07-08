import Navbar from "../components/Navbar.jsx";
import Hero from "../pages/Hero.jsx";
import WhyZugo from "../pages/WhyZugo.jsx";
import Advantages from "../pages/Advantages.jsx";
import HowItWorks from "../pages/HowItWorks.jsx";
import Features from "./Features.jsx";
import FAQ from "./FAQ.jsx";
import CTA from "./CTA.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyZugo />
      <Advantages />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;