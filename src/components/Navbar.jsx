import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg shadow-blue-900/50 fixed w-full top-0 left-0 z-50 rounded-bl-2xl rounded-br-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img
                src="/1.png"
                alt="Infoy Tech Solutions Logo"
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
              />
            </div>

            <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
              <a href="#services" className="hover:text-blue-600">
                Our Service
              </a>
              <a href="#portfolio" className="hover:text-blue-600">
                Portfolio
              </a>
              <a href="#about" className="hover:text-blue-600">
                About Us
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact Us
              </a>
              <a href="#technologies" className="hover:text-blue-600">
                Technologies
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
            <a
              href="#services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Our Service
            </a>
            <a
              href="#portfolio"
              className="block text-gray-700 hover:text-blue-600"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </a>
            <a
              href="#technologies"
              className="block text-gray-700 hover:text-blue-600"
            >
              Technologys
            </a>
          </div>
        )}
      </nav>

      {/* 🔵 Scroll Progress Line */}
      <div className="fixed top-[64px] left-0 w-full z-40">
        <div
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-800 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
