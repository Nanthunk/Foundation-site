import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import Events from "./pages/Events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />     
      <Route path="/contact" element={<Contact />} />
      <Route path="/membership" element={<Membership />} />
    </Routes>
  );
}

export default App;