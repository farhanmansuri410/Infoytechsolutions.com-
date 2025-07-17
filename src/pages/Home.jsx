import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services_Section';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Techno_Section from '../components/Techno_Section';
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <>
    <Hero></Hero>
    <Services/>
    <Techno_Section></Techno_Section>
    <Testimonials></Testimonials>
    <WhyChooseUs></WhyChooseUs>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    </>
  );
};

export default Home;
