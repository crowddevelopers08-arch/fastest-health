import React from 'react';
import { Calendar, Clock, FlaskConical, FileText } from 'lucide-react';

const RoadmapComponent = () => {
  const roadmapSteps = [
    {
      id: 1,
      title: "Instant Digital Booking",
      description: "Choose your required test or health package and book your slot instantly through our seamless online platform",
      icon: Calendar,
      color: "#d9534f"
    },
    {
      id: 2,
      title: "15-Minute Home Collection",
      description: "Experience the industry's quickest turnaround with a certified phlebotomist arriving at your doorstep within 15 minutes of booking for a safe and professional sample collection",
      icon: Clock,
      color: "#135c8e"
    },
    {
      id: 3,
      title: "AI-Powered Lab Processing",
      description: "Your samples are transported in advanced temperature-controlled kits to our NABL-accredited labs for rapid, high-precision processing",
      icon: FlaskConical,
      color: "#d9534f"
    },
    {
      id: 4,
      title: "90-Minute Digital Reports",
      description: "Receive your verified digital reports via WhatsApp, SMS, and Email in just 90 minutes, allowing you to track your health at the speed of life",
      icon: FileText,
      color: "#135c8e"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#135c8e'}}>
            ROADMAP
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(90deg, #d9534f 0%, #135c8e 100%)'}}></div>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={step.id} className="relative mb-16">
                {/* Timeline Node */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10"
                  style={{background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`}}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isLeft ? 'ml-0 mr-auto text-right pr-20' : 'ml-auto mr-0 text-left pl-20'}`}>
                  <div 
                    className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
                  >
                    {/* Step Number */}
                    <div 
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{background: step.color}}
                    >
                      {step.id}
                    </div>

                    {/* Connector Arrow */}
                    <div 
                      className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 ${isLeft ? '-right-12' : '-left-12'}`}
                      style={{backgroundColor: step.color}}
                    ></div>

                    <h3 className="text-2xl font-bold mb-4" style={{color: step.color}}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-8">
          {roadmapSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Icon and Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`}}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{background: step.color}}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3" style={{color: step.color}}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line for Mobile */}
                {step.id !== roadmapSteps.length && (
                  <div 
                    className="w-1 h-8 mx-8 my-2"
                    style={{background: `linear-gradient(180deg, ${step.color} 0%, ${roadmapSteps[step.id].color} 100%)`}}
                  ></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            className="px-10 py-4 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
          >
            Start Your Health Journey Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;