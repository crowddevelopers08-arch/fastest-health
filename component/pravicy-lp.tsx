'use client'
import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Database, Bell, Globe, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      content: 'Fastest Health Tech is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical technology platform.',
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: 'We collect personal and medical information necessary to provide our services, including but not limited to:',
      points: [
        'Personal identification information (name, date of birth, contact details)',
        'Medical history and health information',
        'Insurance and payment information',
        'Technical data (IP address, browser type, device information)',
        'Usage data and analytics',
      ],
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: 'Your information is used exclusively for healthcare and service delivery purposes:',
      points: [
        'Providing medical consultations and telehealth services',
        'Processing appointments and medical records',
        'Communicating important health information',
        'Improving our services and user experience',
        'Compliance with legal and regulatory requirements',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: 'We implement industry-standard security measures to protect your health information:',
      points: [
        'HIPAA-compliant encryption for all medical data',
        'Secure cloud storage with regular backups',
        'Access controls and authentication protocols',
        'Regular security audits and vulnerability assessments',
        'Employee training on data privacy practices',
      ],
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      icon: Globe,
      content: 'We do not sell your personal information. We may share information only when:',
      points: [
        'Required by law or legal process',
        'With your explicit consent for medical referrals',
        'With healthcare providers involved in your treatment',
        'With insurance companies for billing purposes',
        'With service providers under strict confidentiality agreements',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: Eye,
      content: 'You have rights regarding your personal information:',
      points: [
        'Right to access your medical records',
        'Right to request corrections to inaccurate information',
        'Right to request deletion of your data (where permitted by law)',
        'Right to restrict or object to certain processing',
        'Right to data portability',
        'Right to withdraw consent at any time',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: Bell,
      content: 'We use cookies and similar technologies to enhance your experience:',
      points: [
        'Essential cookies for platform functionality',
        'Analytics cookies to improve our services',
        'Preference cookies to remember your settings',
        'Security cookies to protect your account',
        'You can manage cookie preferences through your browser settings',
      ],
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: Shield,
      content: 'Our services are not directed to individuals under 18. We do not knowingly collect information from children without parental consent.',
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      icon: FileText,
      content: 'We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or via email.',
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // In a real application, this would trigger a PDF download
    alert('PDF download would be triggered here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-sm:mb-4 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="h-12 w-12 text-[#135c8e]" />
              </div>
              <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-[#d9534f] flex items-center justify-center">
                <Lock className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 max-sm:mb-1 mb-4">
            Privacy <span className="text-[#135c8e]">Policy</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 max-sm:mb-0 mb-6">
            <div className="h-1 w-16 bg-[#d9534f]"></div>
            <p className="text-lg text-gray-600 italic">
              Fastest Health Tech - Protecting Your Health Information
            </p>
            <div className="h-1 w-16 bg-[#135c8e]"></div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-sm:mb-4 mb-12 border border-gray-200">
          <h3 className="text-xl font-bold text-[#135c8e] mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Quick Navigation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  {React.createElement(section.icon, { 
                    className: "h-4 w-4 text-[#135c8e]" 
                  })}
                </div>
                <span className="font-medium text-gray-800 group-hover:text-[#135c8e]">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl border border-blue-200 p-6 max-sm:mb-4 mb-12">
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full bg-[#d9534f] flex items-center justify-center mr-4 flex-shrink-0">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700">
                This Privacy Policy is designed to comply with HIPAA (Health Insurance Portability and Accountability Act) 
                and other applicable healthcare privacy laws. Your health information is protected by strict confidentiality 
                standards and will never be shared without your explicit consent, except as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-[#135c8e] transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#135c8e] to-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  {React.createElement(section.icon, { 
                    className: "h-6 w-6 text-white" 
                  })}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-white bg-[#d9534f] px-3 py-1 rounded-full mr-3">
                      Section {index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#d9534f] to-[#135c8e] rounded-full"></div>
                </div>
              </div>

              <div className="ml-16 max-sm:ml-3">
                <p className="text-gray-700 mb-6 max-sm:mb-0 text-lg">
                  {section.content}
                </p>

                {section.points && (
                  <div className="space-y-4 max-sm:mb-1 mb-6">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-[#135c8e]"></div>
                        </div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 max-sm:mt-4 bg-gradient-to-r from-[#135c8e] to-blue-800 rounded-xl p-8 text-white">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-white mr-3" />
              <h3 className="text-2xl font-bold">Your Privacy is Our Priority</h3>
            </div>
            
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Fastest Health Tech maintains the highest standards of data protection and privacy. 
              We are committed to transparency in how we handle your sensitive health information 
              and continuously work to enhance our security measures.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                  <Lock className="h-4 w-4" />
                </div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                  <Shield className="h-4 w-4" />
                </div>
                <span>Encrypted Data</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                  <Users className="h-4 w-4" />
                </div>
                <span>Patient-Centered</span>
              </div>
            </div>
            
            <div className="mt-8 max-sm:mt-3 pt-6 border-t border-white/20">
              <p className="text-blue-100">
                © {new Date().getFullYear()} Fastest Health Tech. All rights reserved.
              </p>
              <p className="text-blue-100 text-sm mt-2">
                This privacy policy complies with global healthcare privacy regulations including HIPAA, GDPR, and PIPEDA.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center max-sm:mt-3 max-sm:mb-5 mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#d9534f] to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span>Back to Top</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;