import React from "react";
import {
  Zap,
  Clock,
  Award,
  Thermometer,
  FileCheck,
  Shield,
} from "lucide-react";

const FastestNameSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast 15-Minute Arrival",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Clock,
      title: "90-Minutes Report Guarantee",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Award,
      title: "NABL & ISO Certified",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Thermometer,
      title: "Smart Cold-Chain Technology",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: FileCheck,
      title: "Paperless Experience",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: Shield,
      title: "Hygienic Collection",
      gradient: "from-pink-400 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen py-10 max-sm:py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: "#135c8e" }}
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: "#d9534f", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl animate-pulse"
          style={{ background: "#135c8e", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-16 max-sm:mb-6 lg:mb-6 relative">

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold max-sm:mb-3 mb-6 lg:mb-2 leading-tight">
            <span className=" pr-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Why We're the
            </span>

            <span
              className="bg-gradient-to-r bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #d9534f 0%, #135c8e 100%)",
              }}
            >
              Fastest Name
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              in Health Tech.
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center max-sm:mt-3 mt-6 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#e74c3c] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-3 max-sm:mb-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isRed = index % 2 === 0;
            const mainColor = isRed ? "#d9534f" : "#135c8e";

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-opacity-0 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* Hover Gradient Border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${mainColor}15 0%, ${mainColor}05 100%)`,
                    padding: "2px",
                  }}
                ></div>

                {/* Icon Container with Animated Ring */}
                <div className="relative mb-6 inline-block">
                  {/* Animated Ring */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"
                    style={{
                      background: mainColor,
                      transform: "scale(0.9)",
                      filter: "blur(10px)",
                    }}
                  ></div>

                  {/* Icon Box */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${mainColor} 0%, ${mainColor}dd 100%)`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold leading-tight group-hover:scale-105 transition-transform duration-300"
                  style={{ color: mainColor }}
                >
                  {feature.title}
                </h3>

                {/* Decorative Dot */}
                <div
                  className="absolute top-6 right-6 w-3 h-3 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"
                  style={{ backgroundColor: mainColor }}
                ></div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${mainColor} 50%, transparent 100%)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          {/* Glowing Effect Behind Button */}
          {/* <div 
            className="absolute top-1/1 left-1/1 -translate-x-1/1 -translate-y-1/ w-64 h-32 rounded-full opacity-10 blur-xl"
            style={{background: '#d9534f'}}
          ></div> */}

          <div className="mt-10 max-sm:mt-5 text-center">
            <div className="relative inline-block">
              {/* Background decoration */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

              <a href='#contact' className="flex relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex items-center space-x-2">
                  <span>Book a Home Visit Now</span>
                  <Zap className="group-hover:translate-x-1 transition-transform text-sm" />
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </a >
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 max-sm:mt-5 mt-10">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" style={{ color: "#135c8e" }} />
              <span className="text-sm font-semibold">100% Safe</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-5 h-5" style={{ color: "#d9534f" }} />
              <span className="text-sm font-semibold">Certified Labs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" style={{ color: "#135c8e" }} />
              <span className="text-sm font-semibold">Quick Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestNameSection;
