import React from 'react';
import { motion } from 'framer-motion';

const AboutUsHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          About Infoy Tech Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto"
        >
          We are a team of passionate developers, designers, and strategists committed to building scalable digital solutions that make a real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="/services"
            className="inline-block bg-white hover:bg-gray-300 transition text-black font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            Discover Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHero;
