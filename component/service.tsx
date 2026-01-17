'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      id: 1,
      title: "Full Body Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
      originalPrice: "₹3500",
      price: "₹2499",
      description: "Essential Health Panel - Covers over 60 vital parameters. Comprehensive Gold Panel - Heart, Liver, Kidney, and Vitamin profiles",
      features: [
        "Covers over 60 vital parameters",
        "Complete Heart, Liver & Kidney profile"
      ]
    },
    {
      id: 2,
      title: "Diabetes Management",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=250&fit=crop",
      originalPrice: "₹1500",
      price: "₹999",
      description: "Increasing Blood Sugar, HbA1c and a Lipid Profile.",
      features: [
        "Blood Sugar monitoring",
        "HbA1c Testing",
        "Complete Lipid Profile"
      ]
    },
    {
      id: 3,
      title: "Thyroid Care",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=250&fit=crop",
      originalPrice: "₹800",
      price: "₹499",
      description: "T3, T4, and TSH testing.",
      features: [
        "T3 Testing",
        "T4 Testing",
        "TSH Testing"
      ]
    },
    {
      id: 4,
      title: "Hypertension & Heart",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=250&fit=crop",
      originalPrice: "₹1200",
      price: "₹799",
      description: "High-sensitivity CRP, Cholesterol, and Triglycerides",
      features: [
        "High-sensitivity CRP",
        "Cholesterol Testing",
        "Triglycerides Analysis"
      ]
    },
    {
      id: 5,
      title: "Infection Screening",
      image: "/infection-scanning.jpg",
      originalPrice: "₹900",
      price: "₹599",
      description: "Rapid CBC, ESR, and CRP",
      features: [
        "Rapid CBC",
        "ESR Testing",
        "CRP Analysis"
      ]
    },
    {
      id: 6,
      title: "Rapid Fever",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=250&fit=crop",
      originalPrice: "₹1500",
      price: "₹999",
      description: "Malaria, Dengue, and Typhoid",
      features: [
        "Malaria Testing",
        "Dengue Screening",
        "Typhoid Detection"
      ]
    },
    {
      id: 7,
      title: "Organ Function",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop",
      originalPrice: "₹1800",
      price: "₹1299",
      description: "Liver Function Tests and Kidney Function Tests",
      features: [
        "Complete Liver Function Tests",
        "Comprehensive Kidney Function Tests"
      ]
    },
    {
      id: 8,
      title: "Vital Vitamin",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=250&fit=crop",
      originalPrice: "₹1200",
      price: "₹799",
      description: "Vitamin D and B12.",
      features: [
        "Vitamin D Testing",
        "Vitamin B12 Analysis"
      ]
    },
    {
      id: 9,
      title: "Anemia Detection",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=400&h=250&fit=crop",
      originalPrice: "₹1000",
      price: "₹699",
      description: "Iron level, Ferritin level & Hemoglobin levels.",
      features: [
        "Iron Level Testing",
        "Ferritin Level Analysis",
        "Hemoglobin Levels"
      ]
    },
    {
      id: 10,
      title: "Hormonal Balance",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=250&fit=crop",
      originalPrice: "₹2500",
      price: "₹1799",
      description: "Testosterone Tests, PCOD Profiles & Cortisol Level Test",
      features: [
        "Testosterone Tests",
        "PCOD Profiles",
        "Cortisol Level Test"
      ]
    }
  ];

  const cardsToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(services.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= totalSlides ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? totalSlides - 1 : prevIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  return (
    <div id='services' className="bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-sm:mb-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #135c8e 100%)'
            }}>Medical Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto max-sm:mt-1 mt-4">
            Expert Lab Tests Without the Waiting Room 
          </p>
          
          <div className="flex items-center justify-center  max-sm:mt-3 mt-5 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
            <div className="w-2 h-2 bg-[#135c8e] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrow - Left */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-[#135c8e] hover:bg-[#0d4767] text-white p-2 md:p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-2 md:mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out mb-3"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="w-full flex-shrink-0 flex gap-3 md:gap-6"
                >
                  {services
                    .slice(slideIndex * cardsToShow, (slideIndex + 1) * cardsToShow)
                    .map((service) => (
                      <div 
                        key={service.id} 
                        className={isMobile ? 'w-full' : 'w-1/3'}
                      >
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                          {/* Service Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Service Content */}
                          <div className="p-6">
                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 text-center">
                              {service.title}
                            </h3>

                            {/* Price */}
                            <div className="mb-1 max-sm:mb-0 text-center">
                              <span className="text-[#135c8e] font-semibold text-sm md:text-base">Starting @ </span>
                              <span className="text-gray-400 line-through text-sm mr-2">{service.originalPrice}</span>
                              <span className="text-[#135c8e] font-bold text-xl md:text-2xl">{service.price}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-2 max-sm:mb-0 leading-relaxed text-center min-h-[60px]">
                              {service.description}
                            </p>

                            {/* Salient Features */}
                            <div>
                              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 space-y-2 border border-blue-100">
                                {service.features.map((feature, index) => (
                                  <p key={index} className="text-gray-700 text-sm font-medium">
                                    {feature}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-[#135c8e] hover:bg-[#0d4767] text-white p-2 md:p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8  max-sm:mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#135c8e] w-8' 
                  : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center  max-sm:mt-8 mt-12">
          <div className="relative inline-block">
            <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

            <a href='#contact'
              className="relative inline-flex bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2">
                <span>Find Your Test & Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;