'use client'
import { Calendar, Home, Microscope, FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Instant Digital Booking',
    description: 'Choose your required test or health package and book your slot instantly through our seamless online platform',
    icon: <Calendar className="w-8 h-8" />
  },
  {
    number: 2,
    title: '15-Minute Home Collection',
    description: "Experience the industry's quickest turnaround with a certified phlebotomist arriving at your doorstep within 15 minutes of booking for a safe and professional sample collection",
    icon: <Home className="w-8 h-8" />
  },
  {
    number: 3,
    title: 'AI-Powered Lab Processing',
    description: 'Your samples are transported in advanced temperature-controlled kits to our NABL-accredited labs for rapid, high-precision processing',
    icon: <Microscope className="w-8 h-8" />
  },
  {
    number: 4,
    title: '90-Minute Digital Reports',
    description: 'Receive your verified digital reports via WhatsApp, SMS, and Email in just 90 minutes, allowing you to track your health at the speed of life',
    icon: <FileText className="w-8 h-8" />
  }
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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Road Map
            <div className="flex items-center justify-center mt-6 md:mt-3 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Your health journey, simplified in four seamless steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 " style={{
                  background: 'linear-gradient(135deg, #d9534f 0%, #e74c3c 100%)'
                }}></div>

          <div className="space-y-12 lg:space-y-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`relative transition-all duration-700 transform ${
                  visibleSteps.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className="flex-1 w-full">
                    <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}>
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg" style={{
                  background: 'linear-gradient(135deg, #d9534f 0%, #e74c3c 100%)'
                }}>
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{
                  background: 'linear-gradient(135deg, #d9534f 0%, #e74c3c 100%)'
                }}>
                              {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-md">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex flex-shrink-0 w-20 items-center justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg ring-4 ring-white transition-all duration-500 ${
                      visibleSteps.has(index) ? 'scale-100' : 'scale-0'
                    }`}></div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105" style={{
                  background: 'linear-gradient(135deg, #d9534f 0%, #e74c3c 100%)'
                }}>
            <span className="text-lg font-semibold">Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
