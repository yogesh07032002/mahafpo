
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Network from "./pages/Network";
import WhatWeDo from "./pages/WhatWeDo";
import Gallery from "./pages/Gallery";
import Program from "./pages/Program";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />

        <Navbar />

        <FloatingWhatsApp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/network" element={<Network />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs" element={<Program />} />
        </Routes>

        <Footer />
      </Router>
    </LanguageProvider>
  );
}

