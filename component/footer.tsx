import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, Heart, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Our Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'Blood Tests', href: '#' },
    { name: 'Full Body Checkup', href: '#' },
    { name: 'Diabetes Screening', href: '#' },
    { name: 'Thyroid Profile', href: '#' },
    { name: 'Vitamin Tests', href: '#' },
    { name: 'COVID-19 Tests', href: '#' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background: '#d9534f'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background: '#135c8e'}}></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-sm:pt-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-sm:gap-4 max-sm:mb-4 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className='max-sm:mb-2'>
              <h3 className="text-2xl font-extrabold  mb-2">
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{backgroundImage: 'linear-gradient(135deg, #d9534f 0%, #135c8e 100%)'}}
                >
                  Fastest Health Tech
                </span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading the revolution in home healthcare with lightning-fast 15-minute sample collection and 90-minute digital reports.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #135c8e 0%, #0a4666 100%)'}}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #135c8e 0%, #0a4666 100%)'}}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{background: '#d9534f'}}></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-all duration-300"
                  >
                    <ChevronRight 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      style={{color: '#d9534f'}}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{background: '#135c8e'}}></div>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-all duration-300"
                  >
                    <ChevronRight 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      style={{color: '#135c8e'}}
                    />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full" style={{background: '#d9534f'}}></div>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#135c8e'}} />
                <span>123 Health Street, Tiruchirappalli, Tamil Nadu - 620001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" style={{color: '#d9534f'}} />
                <a href="tel:+918012345678" className="hover:text-white transition-colors duration-300">
                  +91 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" style={{color: '#135c8e'}} />
                <a href="mailto:contact@fastesthealthtech.com" className="hover:text-white transition-colors duration-300">
                  contact@fastesthealthtech.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 flex-shrink-0" style={{color: '#d9534f'}} />
                <span>24/7 Available</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-opacity-100 transition-all duration-300"
                  style={{borderColor: '#135c8e'}}
                />
                <button 
                  className="px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 max-sm:mb-2 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between max-sm:gap-2 items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© {currentYear} Fastest Health Tech. All rights reserved.</p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {policies.slice(0, 3).map((policy, index) => (
              <a 
                key={index}
                href={policy.href}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {policy.name}
              </a>
            ))}
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 animate-pulse" style={{color: '#d9534f'}} fill="#d9534f" />
            <span>in India</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="h-1"
        style={{background: 'linear-gradient(90deg, #d9534f 0%, #135c8e 50%, #d9534f 100%)'}}
      ></div>
    </footer>
  );
};

export default Footer;