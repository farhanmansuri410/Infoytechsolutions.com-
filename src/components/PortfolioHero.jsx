import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Our Work Speaks for Itself
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto"
        >
          Explore our recent projects crafted with innovation, precision, and a user-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 transition text-black font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
