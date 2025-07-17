import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <img
                  src="/1.webp"
                  alt="Infoy Tech Solutions Logo"
                  loading="lazy"
                  className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
                />
              </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
              <Link to="/services" className="hover:text-blue-600">
                Our Services
              </Link>
              <Link to="/technologies" className="hover:text-blue-600">
                Technologies
              </Link>
              <Link to="/portfolio" className="hover:text-blue-600">
                Portfolio
              </Link>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact Us
              </Link>
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
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Our Service
            </Link>
            <Link
              to="/portfolio"
              className="block text-gray-700 hover:text-blue-600"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </Link>
            <Link
              to="/technologies"
              className="block text-gray-700 hover:text-blue-600"
            >
              Technologies
            </Link>
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
