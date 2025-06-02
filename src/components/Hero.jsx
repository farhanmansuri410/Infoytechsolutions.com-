import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-100 to-blue-200 py-20" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
        {/* Left Side 3D Image */}
        <div className="flex justify-center">
          <img
            src="/home.png"
            alt="Hero"
           className="w-[28rem] h-[28rem] object-cover rounded-full bg-white shadow-lg shadow-blue-900/50 p-3"

          />
        </div>

        {/* Right Side Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
            Empowering Your Business With <strong></strong>Infoy Tech Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            We build scalable web and mobile solutions to help you grow, secure,
            and scale your digital presence.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
