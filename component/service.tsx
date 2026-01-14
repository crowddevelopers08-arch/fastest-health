// ServicesSection.jsx
'use client'
import React, { useState } from 'react';
import { 
  FaHeartbeat, FaSyringe, FaStethoscope, FaHeart, 
  FaVirus, FaThermometerFull, FaLungs, FaPills, 
  FaTint, FaBalanceScale, FaArrowRight,
  FaStar, FaBolt, FaClock, FaFlask, FaCheckCircle,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      id: 1,
      title: "Full Body Health",
      subtitle: "Complete Health Assessment",
      icon: <FaHeartbeat />,
      badge: { text: "Popular", icon: <FaStar />, color: "bg-yellow-500" },
      tests: [
        { name: "Essential Health Panel", desc: "Covers over 60 vital parameters" },
        { name: "Comprehensive Gold Panel", desc: "Heart, Liver, Kidney, and Vitamin profiles" }
      ]
    },
    {
      id: 2,
      title: "Diabetes Management",
      subtitle: "Blood Sugar Monitoring",
      icon: <FaSyringe />,
      badge: null,
      tests: [
        { name: "Increasing Blood Sugar", desc: null },
        { name: "HbA1c Testing", desc: null },
        { name: "Complete Lipid Profile", desc: null }
      ]
    },
    {
      id: 3,
      title: "Thyroid Care",
      subtitle: "Thyroid Function Tests",
      icon: <FaStethoscope />,
      badge: null,
      tests: [
        { name: "T3 Testing", desc: null },
        { name: "T4 Testing", desc: null },
        { name: "TSH Testing", desc: null }
      ]
    },
    {
      id: 4,
      title: "Hypertension & Heart",
      subtitle: "Cardiac Health Screening",
      icon: <FaHeart />,
      badge: { text: "Rapid", icon: <FaBolt />, color: "bg-green-500" },
      tests: [
        { name: "High-sensitivity CRP", desc: null },
        { name: "Cholesterol Testing", desc: null },
        { name: "Triglycerides Analysis", desc: null }
      ]
    },
    {
      id: 5,
      title: "Infection Screening",
      subtitle: "Infection Detection",
      icon: <FaVirus />,
      badge: null,
      tests: [
        { name: "Rapid CBC", desc: null },
        { name: "ESR Testing", desc: null },
        { name: "CRP Analysis", desc: null }
      ]
    },
    {
      id: 6,
      title: "Rapid Fever",
      subtitle: "Fever Panel Tests",
      icon: <FaThermometerFull />,
      badge: { text: "2hr Result", icon: <FaClock />, color: "bg-blue-500" },
      tests: [
        { name: "Malaria Testing", desc: null },
        { name: "Dengue Screening", desc: null },
        { name: "Typhoid Detection", desc: null }
      ]
    },
    {
      id: 7,
      title: "Organ Function",
      subtitle: "Liver & Kidney Health",
      icon: <FaLungs />,
      badge: null,
      tests: [
        { name: "Liver Function Tests", desc: null },
        { name: "Kidney Function Tests", desc: null }
      ]
    },
    {
      id: 8,
      title: "Vital Vitamin",
      subtitle: "Vitamin Deficiency Tests",
      icon: <FaPills />,
      badge: null,
      tests: [
        { name: "Vitamin D Testing", desc: null },
        { name: "Vitamin B12 Analysis", desc: null }
      ]
    },
    {
      id: 9,
      title: "Anemia Detection",
      subtitle: "Blood Health Screening",
      icon: <FaTint />,
      badge: null,
      tests: [
        { name: "Iron Level Testing", desc: null },
        { name: "Ferritin Level Analysis", desc: null },
        { name: "Hemoglobin Levels", desc: null }
      ]
    },
    {
      id: 10,
      title: "Hormonal Balance",
      subtitle: "Hormone Level Tests",
      icon: <FaBalanceScale />,
      badge: { text: "Advanced", icon: <FaFlask />, color: "bg-purple-500" },
      tests: [
        { name: "Testosterone Tests", desc: null },
        { name: "PCOD Profiles", desc: null },
        { name: "Cortisol Level Test", desc: null }
      ]
    }
  ];

  // Show only first 8 cards initially (2 rows of 4 on desktop)
  const initialServices = services.slice(0, 8);
  const displayServices = showAll ? services : initialServices;

  const handleBookNow = () => {
    alert("Test booking functionality would be implemented here!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="relative inline-">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: 'linear-gradient(135deg, #d9534f 0%, #135c8e 100%)'
              }}>Medical Services</span>
            </h1>
          </div>
          
          <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto mt-4 lg:mt-2">
            Expert Lab Tests Without the Waiting Room 
          </p>
          
          <div className="flex items-center justify-center mt-6 md:mt-3 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                hoveredCard === service.id ? 'shadow-lg shadow-red-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderLeft: `4px solid ${hoveredCard === service.id ? '#135c8e' : '#135c8e'}`,
              }}
            >
              {/* Card Header */}
              <div 
                className="relative p-4 rounded-t-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #d9534f 0%, #e74c3c 100%)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-white rounded-full"></div>
                </div>
                
                <div className="relative flex items-center space-x-3">
                  {/* Service Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-white text-xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">{service.title}</h3>
                    <p className="text-white/90 text-xs truncate">{service.subtitle}</p>
                  </div>
                </div>
                
                {/* Badge */}
                {service.badge && (
                  <div className={`absolute top-2 right-2 ${service.badge.color} text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-sm`}>
                    {service.badge.icon}
                    <span className="hidden sm:inline">{service.badge.text}</span>
                  </div>
                )}
              </div>
              
              {/* Card Body */}
              <div className="p-4">
                <ul className="space-y-2">
                  {service.tests.map((test, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                          <FaCheckCircle className="text-[#e74c3c] text-xs" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <span className="font-medium text-gray-800 text-sm">
                          {test.name}
                        </span>
                        {test.desc && (
                          <p className="text-gray-600 text-xs mt-0.5">{test.desc}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Read More/Less Button */}
        {services.length > initialServices.length && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="font-semibold">
                {showAll ? 'Show Less' : `View All ${services.length} Services`}
              </span>
              {showAll ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Background decoration */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>
            
            <button
              onClick={handleBookNow}
              className="relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2">
                <span>Find Your Test & Book Now</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;