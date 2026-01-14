'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{background: '#135c8e'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{background: '#d9534f'}}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-6">

          <h2 className="text-2xl md:text-5xl lg:text-4xl font-extrabold mb-4">
            <span className="text-gray-900 pr-2">Book Your</span>
            
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{backgroundImage: 'linear-gradient(135deg, #d9534f 0%, #135c8e 100%)'}}
            >
              Home Health Checkup
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto mt-4">
            Schedule your appointment with our certified phlebotomists. Fast, safe, and convenient healthcare at your doorstep.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Map & Info */}
          <div className="space-y-6">
            {/* Map Container */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125329.14524165288!2d78.59426882734376!3d10.790215100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50d40040591%3A0x2fe2c0f533a92dce!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fastest Health Tech Location"
              ></iframe>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-sm text-gray-600 mb-1">Available 24/7</p>
                <a href="tel:+91 8108 149 234  " className="text-sm font-semibold hover:underline" style={{color: '#d9534f'}}>
                  +91 8108 149 234  
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{background: 'linear-gradient(135deg, #135c8e 0%, #0a4666 100%)'}}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-sm text-gray-600 mb-1">Quick response</p>
                <a href="mailto:info@fastest.health" className="text-sm font-semibold hover:underline" style={{color: '#135c8e'}}>
                    info@fastest.health
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
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
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 group">
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
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-gray-100">
            <div className="mb-8 lg:mb-2 flex flex-col text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Visit</h3>
              <p className="text-gray-600">Fill out the form and we'll contact you within 15 minutes</p>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="relative">
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
                <div className="relative">
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
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date & Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-300 text-gray-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
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
              <button
                onClick={handleSubmit}
                className="group relative w-full py-5 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform -skew-x-12 group-hover:translate-x-full"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Home Visit Now
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;