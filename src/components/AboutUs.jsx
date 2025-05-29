import React from "react";
import { Users } from "lucide-react"; // Big icon from lucide-react

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white to-blue-50 py-20 overflow-hidden h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Icon Side */}
        <div className="flex justify-center w-full md:w-1/3">
          <div className="bg-white p-8 rounded-full shadow-lg shadow-blue-100">
            <Users className="w-28 h-28 text-blue-600" />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
            At <strong>Infoy Tech Solution</strong>, we have proudly been delivering excellence since 2025. Over the years, we have successfully completed numerous projects, consistently exceeding our clients' expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
           Unlike many others in the sector, we never take shortcuts. We invest time to deeply understand each client’s unique requirements and tailor our development process accordingly. Our unwavering focus is on quality, ensuring that every solution we deliver is reliable, scalable, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
