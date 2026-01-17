
"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      {/* Main Navbar Container */}
      <div className="container-fluid ml-5 max-sm:pl-0 max-sm:ml-0 mr-5 px-4 py-3 max-sm:px-4 max-sm:py-3">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left Section - Logo & Brand */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* Logo Container */}
            <div className="relative">
              <div className="relative w-50 h-20 max-sm:h-16 rounded-xl flex items-center justify-center">
                <div className="w-92 h-20 max-sm:h-16 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/fatest-logo.png"
                    alt="Fastest Health Tech Logo"
                    className="w-100 h-40 max-sm:h-32 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Center Section - Navigation Menu (Desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-5 py-2.5 max-sm:mb-0 max-sm:py-0 text-gray-700 font-semibold rounded-lg hover:bg-gradient-to-r transition-all duration-300 relative group"
                style={{
                  "--hover-bg":
                    "linear-gradient(135deg, rgba(217, 83, 79, 0.1) 0%, rgba(19, 92, 142, 0.1) 100%)",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(217, 83, 79, 0.1) 0%, rgba(19, 92, 142, 0.1) 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {item.name}
                {/* Underline effect */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #d9534f 0%, #135c8e 100%)",
                  }}
                ></span>
              </a>
            ))}
          </div>

          {/* Right Section - Contact Info */}
          <div className="hidden lg:flex gap-8">
            {/* Customer Support */}
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #d9534f 0%, #c9302c 100%)",
                  }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                  Customer Support
                </h3>
                <a
                  href="tel:+918108149234"
                  className="text-base font-bold text-gray-800 hover:text-[#135c8e] transition-colors"
                >
                  +91 8108 149 234
                </a>
              </div>
            </div>

            {/* Book Consultant Button */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* Background decoration */}
                <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

                <a
                  href="#contact"
                  className="flex relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <span>Book Your Consultant</span>
                    <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sm" />
                  </div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-123" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4  space-y-2 border-t border-gray-200">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gradient-to-r transition-all duration-300"
              style={{
                "--hover-bg":
                  "linear-gradient(135deg, rgba(217, 83, 79, 0.1) 0%, rgba(19, 92, 142, 0.1) 100%)",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(217, 83, 79, 0.1) 0%, rgba(19, 92, 142, 0.1) 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Contact Info */}
          <div className="pt-4 space-y-4 border-t border-gray-200 mt-4">
            {/* Customer Support */}
            <div className="flex items-center px-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg mr-3"
                style={{
                  background:
                    "linear-gradient(135deg, #d9534f 0%, #c9302c 100%)",
                }}
              >
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-600 uppercase">
                  Customer Support
                </h3>
                <a
                  href="tel:+918108149234"
                  className="text-sm font-bold text-gray-800"
                >
                  +91 8108 149 234
                </a>
              </div>
            </div>

            {/* Book Button */}
            <div className="text-center px-4">
              <div className="relative inline-block">
                {/* Background decoration */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

                <a
                  href="#contact"
                  className="flex relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <span>Book Your Consultant</span>
                    <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sm" />
                  </div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(90deg, #d9534f 0%, #135c8e 50%, #d9534f 100%)",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;