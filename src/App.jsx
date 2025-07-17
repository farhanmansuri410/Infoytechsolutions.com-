// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Page-level imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";




function App() {
  return (
    <Router>
      <div className="scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
