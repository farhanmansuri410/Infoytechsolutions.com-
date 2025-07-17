// components/Testimonials.jsx

import React from "react";

const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Founder, Mehta Traders",
    feedback:
      "Infoy Tech Solutions helped us create a modern website that boosted our online sales by 40%. Their support and professionalism are unmatched.",
  },
  {
    name: "Sneha Patel",
    role: "Marketing Head, FreshKart",
    feedback:
      "They built our mobile app exactly how we imagined it — sleek, fast, and user-friendly. Highly recommended for startups.",
  },
  {
    name: "Arjun Desai",
    role: "CTO, FinTech Pro",
    feedback:
      "From UI/UX to backend development, Infoy Tech Solutions delivered quality at every stage. Great experience working with their team.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-24" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Real feedback from our trusted clients across various industries.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-left border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <div>
                <h3 className="text-blue-800 font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
