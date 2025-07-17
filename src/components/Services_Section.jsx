import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Monitor,
  Smartphone,
  LifeBuoy,
  Brush,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "We create modern, responsive websites using the latest technologies.",
    icon: <Code className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: <Monitor className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Mobile Applications Development",
    description: "Build scalable and secure mobile apps for Android and iOS.",
    icon: <Smartphone className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Website Maintenance and Support",
    description: "Ongoing website updates, security, and technical support.",
    icon: <LifeBuoy className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Graphic Design for Web and Application",
    description: "Attractive UI/UX and branding designs to engage your users.",
    icon: <Brush className="w-8 h-8 text-blue-600 mb-4" />,
  },
  {
    title: "Digital Marketing",
    description: "Grow your business online through SEO, ads, and campaigns.",
    icon: <Megaphone className="w-8 h-8 text-blue-600 mb-4" />,
  },
];

const Services_Section = () => {
  const [isVisible, setIsVisible] = useState(Array(services.length).fill(false));
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const getAnimationClass = (index) => {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 768;
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      const column = index % 3;
      if (column === 0) return "animate-fade-in-left";
      if (column === 2) return "animate-fade-in-right";
    } else if (isTablet) {
      return index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right";
    } else {
      return index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right";
    }

    return "animate-fade-in"; // fallback
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`
                bg-white p-6 rounded-2xl shadow-lg hover:shadow-blue-900/50 transition duration-300 border border-blue-100
                transform transition-all duration-700 ease-out
                ${isVisible[index] ? getAnimationClass(index) : "opacity-0 translate-y-8"}
              `}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services_Section;
