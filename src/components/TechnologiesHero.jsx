// src/components/TechnologiesHero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const TechnologiesHero = () => {
  return (
    <section
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Technologies We Use
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          We work with the latest technologies to build secure, scalable, and performance-optimized web and mobile solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default TechnologiesHero;
