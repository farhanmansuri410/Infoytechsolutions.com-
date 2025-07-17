// src/components/ContactHero.jsx

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircleMore } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Let's Connect & Collaborate!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-white max-w-xl"
          >
            Have a project in mind? We’re just a message away. Contact us through WhatsApp or give us a quick call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918849390320" // Replace with your number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition"
            >
              <MessageCircleMore className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:+918849390320" // Replace with your number
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="./1.webp"
            alt="Contact Infoy Tech Solutions"
            className="w-full max-w-md rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
