'use client'
import  { useState } from 'react';
import { ArrowBigRight, ChevronDown } from 'lucide-react';

const FAQComponent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can you really arrive in 15 minutes?",
      answer: "We use a proprietary hyper-local dispatch system. Similar to ride-hailing apps, our certified phlebotomists are stationed across the city in high-demand zones, allowing the nearest professional to reach you almost instantly."
    },
    {
      id: 2,
      question: "Does the 90-minute report window apply to all tests?",
      answer: "It applies to our most common \"Express\" tests, including CBC, Blood Sugar, CRP, and Liver/Kidney profiles. Specialized tests like Vitamin cultures or Biopsies may take longer, and this is clearly communicated at the time of booking."
    },
    {
      id: 3,
      question: "Is speed compromising the accuracy of my results?",
      answer: "Not at all. We use AI-driven automated lab processing that eliminates manual data entry and \"wait time\" between stages. Every sample is still double-verified by a senior pathologist to ensure NABL-standard accuracy."
    },
    {
      id: 4,
      question: "Are your phlebotomists qualified?",
      answer: "Yes. Every technician is a certified Medical Laboratory Technician (MLT) with specialized training in \"painless\" collection and strict hygiene protocols."
    },
    {
      id: 5,
      question: "How will I receive my reports?",
      answer: "Your digital report is sent via WhatsApp and Email exactly 90 minutes after the sample reaches our processing hub. You can also access your full health history through our secure patient portal."
    },
    {
      id: 6,
      question: "Do I need to fast before my collection?",
      answer: "This depends on the test. For Full Body Checkups and Blood Sugar tests, 8–12 hours of fasting is usually required. Our team will send you a preparation checklist via SMS the moment you book."
    },
    {
      id: 7,
      question: "Are your labs accredited?",
      answer: "Yes, all samples are processed in NABL-accredited and ISO-certified laboratories, ensuring that your reports are accepted by all major hospitals and doctors."
    },
    {
      id: 8,
      question: "What if the technician is late?",
      answer: "While our 15-minute arrival is highly consistent, extreme traffic or weather can occasionally cause delays. If we are running late, you will receive a real-time notification and a priority status update."
    },
    {
      id: 9,
      question: "Can I book for my entire family at once?",
      answer: "Absolutely. You can add multiple family members to a single booking. Our phlebotomist will carry sufficient kits to collect all samples in one visit."
    }
  ];

  const toggleFaq = (id: number) => {
  setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div id='faq' className="min-h-screen max-sm:py-5 py-12 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #135c8e 0%, #0a4666 100%)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center max-sm:mb-6 mb-12 drop-shadow-lg">
          Frequently Asked Questions
          <div className="flex items-center justify-center max-sm:mt-3 mt-6 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
        </h1>
        

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-3 max-sm:mb-5 mb-12">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Question Header - Clickable */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 text-left flex-1">
                  {/* Number Badge */}
                  <div 
                    className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm"
                    style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
                  >
                    {faq.id}
                  </div>

                  {/* Question */}
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug pt-1">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron Icon */}
                <ChevronDown 
                  className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 mt-1 ${
                    openFaq === faq.id ? 'transform rotate-180' : ''
                  }`}
                  style={{color: '#135c8e'}}
                />
              </button>

              {/* Answer - Dropdown Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 text-sm leading-relaxed ml-13">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-sm:mt-5 mt-12">
          <a  href=' #contact'
            className="sm:w-auto px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            style={{color: '#135c8e'}}
          >
            Still have questions? Chat with us
          </a>
                  <div className=" text-center">
            <div className="relative inline-block">
              {/* Background decoration */}
              <div className="absolute bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full blur-md opacity-20"></div>

              <a href='#contact' className="relative flex bg-gradient-to-r from-[#d9534f] to-[#e74c3c] text-white px-6 max-sm:px-5 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex  items-center space-x-2">
                  <span className="block sm:hidden">
                      Book your consultation
                    </span>
                    <span className="hidden sm:block">
                      Ready to start? Book your 15-min consultation
                  </span>
                  <ArrowBigRight className="group-hover:translate-x-1 transition-transform text-sm" />
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQComponent;