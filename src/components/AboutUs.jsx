import React from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Icon Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full md:w-1/3"
        >
          <div className="bg-white p-6 rounded-full shadow-lg shadow-blue-100">
            <Users className="w-24 h-24 md:w-28 md:h-28 text-blue-600" />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-semibold">
            At <strong>Infoy Tech Solution</strong>, we have proudly been delivering excellence since 2025. Over the years, we’ve completed numerous projects, consistently exceeding expectations.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
            Unlike many others, we never take shortcuts. We take time to deeply understand your needs and deliver reliable, scalable, and impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
