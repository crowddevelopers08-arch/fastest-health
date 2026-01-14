"use client";

import React, { useState, useEffect } from "react";
import { Zap, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const WhyChooseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
      title: "Rapid 15-Min Collection",
      color: "#d9534f",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/854/854901.png",
      title: "Precision Logistics",
      color: "#135c8e",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      title: "AI-Driven Processing",
      color: "#d9534f",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/6195/6195699.png",
      title: "Multi-Stage Validation",
      color: "#135c8e",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3588/3588592.png",
      title: "Modern Diagnostic Journey",
      color: "#d9534f",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
      title: "Accuracy Maintained Regardless of Weather or Traffic Conditions",
      color: "#135c8e",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible cards (current, prev, next)
  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + features.length) % features.length;
    const next = (currentIndex + 1) % features.length;
    return { prev, current: currentIndex, next };
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen py-10 max-sm:py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        <div className="text-center mb-16 max-sm:mb-6 lg:mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Why Choose Fastest Health Tech
          </h2>
          <div className="flex items-center justify-center mt-6 max-sm:mt-3 lg:mt-4 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-sm:mb-5 mb-16">
          {/* Desktop: 3 Cards View */}
          <div className="hidden lg:flex items-center justify-center gap-6 px-16">
            {[visibleCards.prev, visibleCards.current, visibleCards.next].map(
              (index, position) => {
                const feature = features[index];
                const isCenter = position === 1;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isCenter ? "scale-110 z-20" : "scale-90 opacity-60 z-10"
                    }`}
                    style={{ flex: "0 0 calc(33.333% - 1rem)" }}
                  >
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:shadow-2xl relative">
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl transition-opacity duration-300 blur-xl ${
                          isCenter ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ background: `${feature.color}33` }}
                      ></div>

                      {/* Image Container */}
                      <div className="relative mb-6">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 p-4 mx-auto"
                          style={{
                            background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                          }}
                        >
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-black leading-tight text-center">
                        {feature.title}
                      </h3>

                      {/* Decorative Corner */}
                      <div
                        className="absolute top-4 right-4 w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.color }}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Mobile/Tablet: Single Card View */}
          <div className="lg:hidden flex justify-center px-4">
            <div className="w-full max-w-md">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:shadow-2xl relative">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `${features[currentIndex].color}33` }}
                ></div>

                {/* Image Container */}
                <div className="relative mb-6">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 p-5 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${features[currentIndex].color} 0%, ${features[currentIndex].color}dd 100%)`,
                    }}
                  >
                    <img
                      src={features[currentIndex].image}
                      alt={features[currentIndex].title}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black leading-tight text-center">
                  {features[currentIndex].title}
                </h3>

                {/* Decorative Corner */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{ backgroundColor: features[currentIndex].color }}
                ></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30 z-30"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30 z-30"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 max-sm:mb-6 mb-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 h-3" : "w-3 h-3 opacity-50"
              }`}
              style={{
                backgroundColor:
                  index === currentIndex ? features[index].color : "#ffffff",
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-sm:gap-3 max-sm:mt-2 mt-12">
          {/* Primary CTA */}

          <div className=" text-center">
            <div className="relative inline-block">
              {/* Background decoration */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

              <a href="#contact" className="relative flex bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group">
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
          <a href="#contact" className="group flex sm:w-auto px-9 py-3 bg-white bg-opacity-10 backdrop-blur-lg text-black rounded-full font-bold text-md border-2 border-white border-opacity-30 hover:bg-opacity-20 hover:border-opacity-50 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
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
        </div>

        {/* Trust Badge */}
        <div className="text-center max-sm:mt-4 mt-12">
          <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-lg px-6 py-3 rounded-full border border-white border-opacity-20">
             <span className="hidden sm:inline text-black font-semibold text-sm">
                NABL-Accredited | ISO-Certified | Trusted by 100,000+ Users
            </span>

            {/* Mobile only */}
            <span className="sm:hidden text-black font-semibold text-sm">
                NABL-Accredited | ISO-Certified | Trusted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
