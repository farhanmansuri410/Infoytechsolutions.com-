import React from "react";
import Services_Section from "../components/Services_Section";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqSection from "../components/FaqSection";
import ServicesHero from "../components/ServicesHero";

const Services = () => {
  return (
    <>
      <ServicesHero></ServicesHero>
      <Services_Section></Services_Section>
      <WhyChooseUs></WhyChooseUs>
      <FaqSection></FaqSection>
    </>
  );
};

export default Services;
