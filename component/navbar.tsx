// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 py-3 ">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          
          {/* Left Section - Logo & Brand */}
          <div className="flex items-center lg:mb-0">
            {/* Logo Container with Shadow */}
            <div className="relative mr-4">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0  "></div>
              
              {/* Logo Circle */}
              <div className="relative w-50 h-20 rounded-xl flex items-center justify-center">
                {/* Inner White Circle */}
                <div className="w-92 h-20 bg-white rounded-lg flex items-center justify-center">
                  {/* Replace with your logo image */}
                  <img 
                    src="/fatest-logo.png" 
                    alt="Healthians Logo"
                    className="w-100 h-40 object-contain"
                
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="w-full lg:w-auto flex ">
            {/* Main Contact Info Container */}
            <div className=" rounded-xl gap-5 flex">
              
              {/* Top Row - Customer Support */}
              <div className="border-gray-200">
                <div className="flex items-start">
                  {/* Icon */}
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d9534f] to-[#e74c3c] flex items-center justify-center shadow">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Customer Support
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <a 
                        href="tel:+91 8108 149 234  " 
                        className="text-lg font-bold text-gray-800 hover:text-[#135c8e] transition-colors"
                      >
                        +91 8108 149 234  
                      </a>
                      {/* <span className="text-gray-400">/</span>
                      <a 
                        href="tel:9998880005" 
                        className="text-lg font-bold text-gray-800 hover:text-[#135c8e] transition-colors"
                      >
                        999-888-000-5
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Corporate Enquiry */}
              <div className="flex items-start">
                {/* Icon */}
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#135c8e] to-[#1a73e8] flex items-center justify-center shadow">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                   For Corporate Bookings/Enquiry
                  </h3>
                  <a 
                    href="tel:9311253875" 
                    className="text-lg font-bold text-gray-800 hover:text-[#d9534f] transition-colors block"
                  >
                    931-125-387-5
                  </a>
                </div>
              </div>

            </div>

            {/* Decorative Element */}

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;