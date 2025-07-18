import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const clientLocations = [
  { city: "Delhi", top: "30%", left: "45%" },
  { city: "Mumbai", top: "60%", left: "30%" },
  { city: "Bangalore", top: "75%", left: "40%" },
  { city: "Ahmedabad", top: "55%", left: "35%" },
  { city: "Hyderabad", top: "70%", left: "50%" },
];

const Map = () => {
  return (
    <section
      id="portfolio"
      className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Client Presence in India
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We proudly serve clients across the country. Here’s a glimpse of where our partners are located.
        </p>

        {/* Map Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/India_map_blank_without_states.svg"
            alt="India Map"
            className="w-full h-auto"
            loading="lazy"
          />

          {/* Markers */}
          {clientLocations.map((location, idx) => (
            <div
              key={idx}
              className="absolute text-red-600 text-xl"
              style={{
                top: location.top,
                left: location.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaMapMarkerAlt title={location.city} />
              <span className="text-xs bg-white px-1 rounded shadow text-gray-700 mt-1 block">
                {location.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
