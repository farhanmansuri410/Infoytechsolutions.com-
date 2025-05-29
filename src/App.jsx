import React from "react";
import "./styles/index.css";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Technologies from './components/Technologies'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


function App() {
  return <div className="scroll-smooth " >
    
    <Navbar></Navbar>
    <Hero></Hero>
    <Services></Services>
    <WhyChooseUs></WhyChooseUs>
    <Technologies></Technologies>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
}

export default App;
