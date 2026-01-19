"use client";
import { useState, useEffect } from "react";
import { Search, Truck, FileText, UserCheck } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "CXO SUPER SPECIALITY HEALTH",
      image: "/banner1.jpg",
    },
    {
      id: 2,
      title: "COMPREHENSIVE HEALTH",

      image: "/Website-Banner-02.jpg",
    },
    {
      id: 3,
      title: "ADVANCED CARDIAC",

      image: "/Website-Banner-03.jpg",
    },
    {
      id: 4,
      title: "DIABETES & THYROID",

      image: "/Website-Banner-04.jpg",
    },
    {
      id: 5,
      title: "WOMEN'S WELLNESS",

      image: "/Website-Banner-05.jpg",
    },
    {
      id: 6,
      title: "SENIOR CITIZEN",

      image: "/Website-Banners-04.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Slides Container with Rounded Corners */}
        {/* <div className="relative w-full h-[144px] max-sm:h-[144px] sm:h-[550px] md:h-[600px] lg:h-[443px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000  ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 ">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
                  ))}
        </div> */}
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white
                aspect-[8/3] sm:aspect-auto sm:h-[441px] md:h-[300px] lg:h-[443px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover sm:object-cover object-center"
              />
            </div>
          ))}
        </div>


        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 bg-[#135c8e]"
                  : "w-3 bg-gray-400 hover:bg-[#135c8e]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
