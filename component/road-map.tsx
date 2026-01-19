"use client";
import { Calendar, Home, Microscope, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Instant Digital Booking ",
    description:
      "Choose your required test or health package and book your slot instantly through our seamless online platform.",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "15-Minute Home Collection",
    description:
      "Experience the industry's quickest turnaround with a certified phlebotomist arriving at your doorstep within 15 minutes of booking for a safe and professional sample collection",
    icon: <Home className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "NABL Accreditred Labs Processing ",
    description:
      "Your samples are transported in advanced temperature-controlled kits to our NABL-accredited labs for rapid, high-precision processing.",
    icon: <Microscope className="w-8 h-8" />,
  },
  {
    number: 4,
    title: "90-Minute Digital Reports ",
    description:
      "Receive your verified digital reports via WhatsApp, SMS, and Email in just 90 minutes, allowing you to track your health at the speed of life.",
    icon: <FileText className="w-8 h-8" />,
  },
];

function Roadmap() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSteps((prev) => new Set(prev).add(index));
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center  max-sm:mb-5 mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
            <span className="text-gray-900">Your Health </span>
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: "linear-gradient(135deg, #d9534f 0%, #135c8e 100%)",
              }}
            >
               Check up
            </span>
            <br />
            <span className="text-gray-900">Journey</span>
          </h1>
          <div className="flex items-center justify-center  max-sm:mt-3 mt-5 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
            <div className="w-2 h-2 bg-[#135c8e] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#135c8e] to-[#135c8e] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto  max-sm:mt-1 mt-4">
            Your health journey, simplified in four seamless steps
          </p>
        </div>

        {/* Single Row Layout with Wavy Line */}
        <div className="relative">
          {/* Wavy Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-24">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#135c8e', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#135c8e', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M 0 50 Q 150 20, 300 50 T 600 50 T 900 50 T 1200 50"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
              />
              {/* Dots on the line */}
              <circle cx="150" cy="35" r="6" fill="#135c8e" />
              <circle cx="450" cy="65" r="6" fill="#135c8e" />
              <circle cx="750" cy="35" r="6" fill="#135c8e" />
              <circle cx="1050" cy="65" r="6" fill="#135c8e" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`transition-all duration-700 transform ${
                  visibleSteps.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0  rounded-full blur-lg opacity-30"></div>
                    <div className="relative w-24 h-24 bg-[#135c8e] rounded-full flex items-center justify-center text-white shadow-xl">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16  max-sm:mt-8 text-center">
          <div className="relative inline-block">
            <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

            <a
              href="#contact"
              className="flex relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
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
}

export default Roadmap;