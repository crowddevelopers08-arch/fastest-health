"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    test: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <div className="min-h-screen py-10 max-sm:py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "#135c8e" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "#d9534f" }}
      ></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 max-sm:mb-5 lg:mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold max-sm:mb-1 mb-4">
            <span className="text-gray-900 pr-2">Book Your</span>

            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #d9534f 0%, #135c8e 100%)",
              }}
            >
              Home Health Checkup
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto max-sm:mt-2 mt-4">
            Schedule your appointment with our certified phlebotomists. Fast,
            safe, and convenient healthcare at your doorstep.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-sm:gap-4 lg:gap-12">
          {/* Left Side - Map & Info */}
          <div className="space-y-6">
            {/* Map Container */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 h-[530px] max-sm:h-[510px]">
            {/* Image Carousel */}
            <div className="relative w-full h-full">
              <img
                src="/Studio-Session.JPG"
                alt="Image 1 description"
                className="absolute inset-0 w-full object-cover transition-opacity duration-500 opacity-100"
              />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #d9534f 0%, #c9302c 100%)",
                  }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 max-sm:mb-0 mb-2">
                  Call Us
                </h4>
                <p className="text-sm text-gray-600 max-sm:mb-0 mb-1">
                  Available 24/7
                </p>
                <a
                  href="tel:+91 8108 149 234  "
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#135c8e" }}
                >
                  +91 8108 149 234
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #135c8e 0%, #0a4666 100%)",
                  }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 max-sm:mb-0 mb-2">
                  Email Us
                </h4>
                <p className="text-sm text-gray-600 max-sm:mb-0 mb-1">
                  Quick response
                </p>
                <a
                  href="mailto:info@fastest.health"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#135c8e" }}
                >
                  info@fastest.health
                </a>
              </div>

              {/* Location Card */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-sm text-gray-600">
                  123 Health Street, Tiruchirappalli, Tamil Nadu - 620001
                </p>
              </div> */}

              {/* Hours Card */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{background: 'linear-gradient(135deg, #135c8e 0%, #0a4666 100%)'}}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Working Hours</h4>
                <p className="text-sm text-gray-600">
                  24/7 Service Available<br />
                  Always here for you
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            id="contact"
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-gray-100"
          >
            <div className="mb-8 max-sm:mb-3 lg:mb-2 flex flex-col text-center">
              <h3 className="text-3xl font-bold text-gray-900 max-sm:mb-0 mb-2">
                Book your test now!
              </h3>
              <p className="text-gray-600">
                Fill out the form and we'll contact you within 15 minutes
              </p>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative max-sm:mb-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:mb-2 gap-6 max-sm:gap-0">
                {/* Email */}
                <div className="relative max-sm:mb-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative max-sm:mb-0">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 text-gray-900"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-4">
                {/* Pincode Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter your pincode"
                      value={formData.pincode || ""}
                      onChange={handleChange}
                      maxLength={6}
                      pattern="[0-9]{6}"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Test
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="test"
                      list="testSuggestions"
                      placeholder="eg: Blood test, PCOS panel, etc."
                      value={formData.test || ""}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-900"
                    />

                    {/* Datalist for suggestions */}
                    <datalist id="testSuggestions">
                      <option value="Complete Blood Count (CBC)">
                        Complete Blood Count (CBC)
                      </option>
                      <option value="Lipid Profile">Lipid Profile</option>
                      <option value="Liver Function Test">
                        Liver Function Test
                      </option>
                      <option value="Kidney Function Test">
                        Kidney Function Test
                      </option>
                      <option value="Thyroid Panel">Thyroid Panel</option>
                      <option value="Diabetes Panel">Diabetes Panel</option>
                      <option value="PCOS Panel">PCOS Panel</option>
                      <option value="Vitamin D Test">Vitamin D Test</option>
                      <option value="Vitamin B12 Test">Vitamin B12 Test</option>
                      <option value="Iron Studies">Iron Studies</option>
                      <option value="Allergy Test">Allergy Test</option>
                      <option value="COVID-19 RT-PCR">COVID-19 RT-PCR</option>
                      <option value="Urine Routine Test">
                        Urine Routine Test
                      </option>
                      <option value="HbA1c Test">HbA1c Test</option>
                      <option value="HIV Test">HIV Test</option>
                    </datalist>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative max-sm:mb-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 resize-none text-gray-900"
                    placeholder="Tell us about your health concerns or specific tests you need..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}

              <div className=" text-center max-sm:mt-5">
                <div className="relative inline-block">
                  {/* Background decoration */}
                  <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

                  <button
                    onClick={handleSubmit}
                    className="relative bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-2">
                      <span> Book Home Visit Now</span>
                      <Send className="group-hover:translate-x-1 transition-transform text-sm" />
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
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
