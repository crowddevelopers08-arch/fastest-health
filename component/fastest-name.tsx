'use client'

import React, { useState, useEffect } from "react";
import {
  Zap,
  Clock,
  Award,
  Thermometer,
  FileCheck,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const FastestNameSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      title: "Lightning-Fast 15-Minute Arrival",
      color: "#135c8e",
      imageUrl: "/timer.png", // Image for fast arrival
    },
    {
      title: "90-Minutes Report Guarantee",
      color: "#135c8e",
      imageUrl: "/ninty.png", // Image for report guarantee
    },
    {
      title: "NABL & ISO Certified",
      color: "#135c8e",
      imageUrl: "/iso.png", // Image for certification
    },
    {
      title: "Smart Cold-Chain Technology",
      color: "#135c8e",
      imageUrl: "/chain.png", // Image for cold chain
    },
    {
      title: "Paperless Experience",
      color: "#135c8e",
      imageUrl: "/task.png", // Image for paperless
    },
    {
      title: "Hygienic Collection",
      color: "#135c8e",
      imageUrl: "/first-aid-kit.png", // Image for hygiene
    },
  ];

  // If you don't have actual image files, we can use SVG placeholders
  const getImageContent = (feature: typeof features[0], index: number) => {
    // If imageUrl exists, use Next.js Image component
    if (feature.imageUrl) {
      return (
        <div className="w-12 h-12 relative">
          <Image 
            src={feature.imageUrl} 
            alt={feature.title}
            fill
            className="object-contain filter brightness-0 invert flex justify-center"
            sizes="(max-width: 768px) 48px, 40px"
          />
        </div>
      );
    }
    
    // Fallback SVG icons if images are not available
    const fallbackIcons = [
      <svg key="timer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>,
      <svg key="report" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>,
      <svg key="certified" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>,
      <svg key="cold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <path d="M20 14.66V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.34"></path>
        <path d="M18 2H6a2 2 0 0 0-2 2v5.34"></path>
        <path d="M22 8H2"></path>
        <path d="M12 2v20"></path>
      </svg>,
      <svg key="paperless" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>,
      <svg key="hygiene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>,
    ];
    
    return fallbackIcons[index] || fallbackIcons[0];
  };

  const cardsToShow = isMobile ? 1 : 6;
  const maxIndex = features.length - cardsToShow;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-gray-900">Why We're the </span>
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: "linear-gradient(135deg, #d9534f 0%, #135c8e 100%)",
              }}
            >
              Fastest Name
            </span>
            <br />
            <span className="text-gray-900">in Health Tech.</span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
            <div className="w-2 h-2 bg-[#135c8e] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
          </div>
        </div>

        {/* Desktop - Single Row View */}
        <div className="hidden md:flex items-center justify-center gap-20 max-sm:gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 group"
            >
              {/* Image Circle */}
              <div className="relative mb-4">
                <div 
                  className="absolute w-20 h-20 rounded-full blur-lg opacity-30"
                  // style={{ backgroundColor: feature.color }} 
                ></div>
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                  }}
                >
                  {getImageContent(feature, index)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-md font-bold leading-tight max-w-[140px] group-hover:scale-105 transition-transform duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel View */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center">
                    {/* Image Circle */}
                    <div className="relative mb-4">
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-30"
                        style={{ backgroundColor: feature.color }}
                      ></div>
                      <div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                        }}
                      >
                        {getImageContent(feature, index)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-lg font-bold leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator - Mobile */}
          <div className="flex justify-center mt-6 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-8 h-3" : "w-3 h-3 opacity-50"
                }`}
                style={{
                  backgroundColor: index === currentIndex ? "#135c8e" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

            <a 
              href="#contact" 
              className="flex relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2">
                <span>Book a Home Visit Now</span>
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" style={{ color: "#135c8e" }} />
              <span className="text-lg font-semibold">100% Safe</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-5 h-5" style={{ color: "#135c8e" }} />
              <span className="text-lg font-semibold">Certified Labs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" style={{ color: "#135c8e" }} />
              <span className="text-lg font-semibold">Quick Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestNameSection;