import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-26 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Expert IT Services for<br />Your Growing Business
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            From Web & Mobile Development to UI/UX Design and SEO — InfoyTech Solutions empowers startups and enterprises with smart technology.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
          >
            Explore Our Services
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/1.webp"
            alt="InfoyTech Services"
            className="max-w-md w-full rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
