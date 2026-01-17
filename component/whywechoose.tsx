"use client";

import React from "react";
import { Zap } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      image: "/15-minutes.png",
      title: "Rapid 15-Min Collection",
      number: "01",
      color: "#d9534f",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/411/411763.png",
      title: "Precision Logistics",
      number: "02",
      color: "#135c8e",
    },
    {
      image: "/settings.png",
      title: "AI-Driven Processing",
      number: "03",
      color: "#d9534f",
    },
    {
      image: "/smartphone.png",
      title: "Multi-Stage Validation",
      number: "04",
      color: "#135c8e",
    },
    {
      image: "/map.png",
      title: "Modern Diagnostic Journey",
      number: "05",
      color: "#d9534f",
    },
    {
      image: "/weather-radar.png",
      title: "Accuracy Maintained Regardless of Weather or Traffic Conditions",
      number: "06",
      color: "#135c8e",
    },
  ];

  return (
    <div className="py-10 max-sm:py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #135c8e 0%, #0a4666 50%, #135c8e 100%)",
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 max-sm:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Why Choose Fastest Health Tech
          </h2>
          <div className="flex items-center justify-center mt-6 max-sm:mt-3 lg:mt-4 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 max-sm:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Number Badge */}
                  <div
                    className="relative mb-4 w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110"
                      // style={{
                      //   background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                      // }}
                  >
                    <span className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span
                        className="font-bold text-sm"
                        // style={{ color: feature.color }}
                      >
                        {feature.number}
                      </span>
                    </span>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-10 h-10 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm lg:text-base font-semibold text-white leading-tight">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-sm:gap-3 max-sm:mt-2 lg:mt-6 mt-12">
          {/* Primary CTA */}
          <div className="text-center">
            <div className="relative inline-block">
              {/* Background decoration */}
              <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

              <a
                href="#contact"
                className="relative flex bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <span> Skip the Lab Queue – Book Now</span>
                  <Zap className="group-hover:translate-x-1 transition-transform text-sm" />
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group flex sm:w-auto px-9 py-3 bg-white bg-opacity-10 backdrop-blur-lg text-bike rounded-full font-bold text-md border-2 border-white border-opacity-30 hover:bg-opacity-20 hover:border-opacity-50 shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <span className="flex items-center justify-center font-semibold gap-2">
              Learn More About Us
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
          {/* Trust Badge */}
          <div className="text-center max-sm:mt-4 ">
            <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-lg px-6 py-3 rounded-full border border-white border-opacity-20">
              <span className="hidden sm:inline text-black font-semibold text-sm">
               Presence in 250+ Cities Across | India
              </span>

              {/* Mobile only */}
              <span className="sm:hidden text-black font-semibold text-sm">
                Presence in 250+ Cities Across | India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
