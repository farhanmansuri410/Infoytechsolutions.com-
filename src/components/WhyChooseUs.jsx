import React from "react";
import {
  TrendingUp,
  ShieldCheck,
  Handshake,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Result-Driven Approach",
    description:
      "We focus on delivering solutions that directly impact your growth — not just code, but meaningful results.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Security & Scalability First",
    description:
      "Our solutions are built with security at the core and scale effortlessly as your business grows.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Client-First Philosophy",
    description:
      "We treat your goals as ours. Transparency, timely communication, and real collaboration drive every project.",
    icon: <Handshake className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Full-Cycle Support",
    description:
      "From idea to deployment and beyond, we provide end-to-end services, maintenance, and proactive support.",
    icon: <Wrench className="w-8 h-8 text-blue-600 mb-4" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-20 " id="why-us">
      <div className="max-w-7xl mx-auto px-16 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Why Choose Us
        </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-blue-900/50 transition "
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
