"use client";
import React, { useEffect } from "react";
import { CheckCircle, Home, Calendar, Phone, Mail, Shield } from "lucide-react";

const ThankYouPage = () => {
  // Simulate sending confirmation email
  useEffect(() => {
    // You can integrate with your email service here
    console.log("Confirmation email sent to patient");
  }, []);

  const handleReturnHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-sm:mb-6 mb-12">
          <div className="flex items-center justify-center max-sm:mb-2 mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-[#135c8e]" />
              <h1 className="text-3xl font-bold text-gray-900">
                Fastest <span className="text-[#d9534f]">Health</span> Tech
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Your trusted partner in medical technology solutions
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="px-8 py-12 sm:px-10">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-20 w-20 text-green-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-[#135c8e] flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Trust!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Your medical consultation has been successfully scheduled with
                Fastest Health Tech.
              </p>
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#135c8e] to-blue-700 text-white font-semibold">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse mr-3"></div>
                Confirmation Sent Successfully
              </div>
            </div>

            {/* Confirmation Details */}
            <div className="bg-blue-50 rounded-xl p-6 mb-10 border border-blue-100">
              <h3 className="text-xl font-semibold text-[#135c8e] mb-6 text-center">
                Appointment Confirmation Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-4">
    <div className="flex items-center">
      <Calendar className="h-5 w-5 text-[#d9534f] mr-3" />
      <div>
        <p className="text-sm text-gray-500">Appointment ID</p>
        <p className="font-semibold text-gray-800">
          FHT-{Date.now().toString().slice(-8)}
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <Calendar className="h-5 w-5 text-[#d9534f] mr-3" />
      <div>
        <p className="text-sm text-gray-500">Status</p>
        <p className="font-semibold text-green-600">Confirmed</p>
      </div>
    </div>
  </div>
  
  <div className="space-y-4">
    <div className="flex items-center">
      <Mail className="h-5 w-5 text-[#135c8e] mr-3" />
      <div>
        <p className="text-sm text-gray-500">Confirmation Email</p>
        <p className="font-semibold text-gray-800">
          Sent to your registered email
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <Phone className="h-5 w-5 text-[#135c8e] mr-3" />
      <div>
        <p className="text-sm text-gray-500">Contact Support</p>
        <p className="font-semibold text-gray-800">1-800-FHT-HELP</p>
      </div>
    </div>
  </div>
</div>
            </div>

            {/* Next Steps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens Next?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#135c8e] transition-colors">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#135c8e] font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Email Confirmation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    You'll receive detailed instructions and a secure meeting
                    link via email
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#135c8e] transition-colors">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#135c8e] font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Pre-Consultation Prep
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our medical team will review your information before the
                    consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReturnHome}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#135c8e] to-blue-700 text-white font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <Home className="h-5 w-5 mr-2" />
                Return to Home
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#135c8e] to-blue-800 px-8 py-6 sm:px-10">
            <div className="text-center text-white">
              <h4 className="font-semibold mb-2">Need Immediate Assistance?</h4>
              <p className="text-blue-100 mb-4">
                Our support team is available 24/7 for emergency medical
                consultations
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+91 8108 149 234 " className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Emergency: +91 8108 149 234 </span>
                </a>
                <a
                  href="mailto:info@fastest.health"
                  className="flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span> info@fastest.health</span>
                </a>
              </div>
              <p className="text-blue-100 text-sm mt-6">
                Fastest Health Tech - Committed to your health and privacy
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            Your health information is protected by HIPAA regulations and our
            secure encryption protocols. All consultations are confidential.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Fastest Health Tech. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
