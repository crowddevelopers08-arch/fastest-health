'use client'

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Chennai",
      rating: 5,
      date: "2 days ago",
      review: "Absolutely amazing service! The phlebotomist arrived in exactly 15 minutes as promised. The entire process was so smooth and professional. Got my reports in 90 minutes via WhatsApp. This is the future of healthcare!",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=d9534f&color=fff&bold=true"
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      date: "5 days ago",
      review: "I was skeptical about the 90-minute promise, but they delivered! Super professional team, painless collection, and the digital reports were so detailed. Highly recommend for anyone who values their time.",
      avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=135c8e&color=fff&bold=true"
    },
    {
      name: "Anitha Reddy",
      location: "Hyderabad",
      rating: 5,
      date: "1 week ago",
      review: "Best health tech service I've ever used! No more waiting in long lab queues. The phlebotomist was so gentle and hygienic. The entire family is now using this service. Thank you for making healthcare so convenient!",
      avatar: "https://ui-avatars.com/api/?name=Anitha+Reddy&background=d9534f&color=fff&bold=true"
    },
    {
      name: "Vikram Patel",
      location: "Mumbai",
      rating: 5,
      date: "1 week ago",
      review: "Lightning fast and accurate! I booked a full body checkup and the entire experience was seamless. From booking to receiving reports, everything was done in under 2 hours. NABL certified reports gave me complete confidence.",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Patel&background=135c8e&color=fff&bold=true"
    },
    {
      name: "Meera Nair",
      location: "Kochi",
      rating: 5,
      date: "2 weeks ago",
      review: "Incredible service for busy professionals! I could get my blood tests done at home during my work break. The 15-minute arrival is not a gimmick - it's real! Reports came exactly when promised. Five stars!",
      avatar: "https://ui-avatars.com/api/?name=Meera+Nair&background=d9534f&color=fff&bold=true"
    },
    {
      name: "Arjun Menon",
      location: "Delhi",
      rating: 5,
      date: "3 weeks ago",
      review: "Game changer for health diagnostics! The AI-powered processing is so fast without compromising accuracy. The phlebotomist was certified and very professional. This is what modern healthcare should look like!",
      avatar: "https://ui-avatars.com/api/?name=Arjun+Menon&background=135c8e&color=fff&bold=true"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index : number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible cards
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + reviews.length) % reviews.length;
      cards.push({ index, position: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen py-9 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl" style={{background: '#135c8e'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{background: '#d9534f'}}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-14">
          {/* Google Logo Badge */}
          <div className="inline-flex items-center gap-2 mb-4 lg:mb-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-700">4.9/5.0</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold mb-6 md:mb-2 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Read Patient Stories & Experiences
            </span>
            <br />
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #d9534f 0%, #135c8e 100%)'
              }}
            >
              at Fastest Health Tech
            </span>
            <div className="flex items-center justify-center mt-6 lg:mt-3 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d9534f] to-[#e74c3c] rounded-full"></div>
            <div className="w-2 h-2 bg-[#d9534f] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#d9534f] rounded-full"></div>
          </div>
          </h2>
          

          {/* Sub-Headline */}
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied people who have reclaimed their time and health with our lightning-fast 90-minute diagnostic reports
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-16 px-4 sm:px-12 lg:px-16">
          {/* Desktop: 3 Cards */}
          <div className="hidden lg:flex items-stretch justify-center gap-6 min-h-[400px]">
            {visibleCards.map(({ index, position }) => {
              const review = reviews[index];
              const isCenter = position === 0;
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isCenter 
                      ? 'scale-105 z-20' 
                      : 'scale-90 opacity-50 z-10'
                  }`}
                  style={{ flex: '0 0 calc(33.333% - 1rem)' }}
                >
                  <ReviewCard review={review} isCenter={isCenter} />
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet: Single Card */}
          <div className="lg:hidden">
            <ReviewCard review={reviews[currentIndex]} isCenter={true} />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 z-30 hover:scale-110"
            style={{borderColor: '#135c8e'}}
          >
            <ChevronLeft className="w-6 h-6" style={{color: '#135c8e'}} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 z-30 hover:scale-110"
            style={{borderColor: '#d9534f'}}
          >
            <ChevronRight className="w-6 h-6" style={{color: '#d9534f'}} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-10 h-3' 
                  : 'w-3 h-3 opacity-40'
              }`}
              style={{
                backgroundColor: index === currentIndex 
                  ? (index % 2 === 0 ? '#d9534f' : '#135c8e')
                  : '#6b7280'
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            className="group relative px-9 py-3 text-white rounded-full font-bold text-md shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            style={{background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform -skew-x-12 group-hover:translate-x-full"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              Consult Our Experts for Your Reports
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-lg font-bold" style={{color: '#d9534f'}}>10,000+</div>
              <div className="text-sm text-gray-600 font-semibold">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold" style={{color: '#135c8e'}}>4.9/5.0</div>
              <div className="text-sm text-gray-600 font-semibold">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold" style={{color: '#d9534f'}}>15 Min</div>
              <div className="text-sm text-gray-600 font-semibold">Avg. Arrival Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Review Card Component
interface ReviewCardProps {
  review: {
    name: string;
    location: string;
    rating: number;
    date: string;
    review: string;
    avatar: string;
  };
  isCenter: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, isCenter }) => {
  return (
    <div className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col ${
      isCenter ? 'border-2' : 'border border-gray-100'
    }`} style={{
      borderColor: isCenter ? '#d9534f' : undefined
    }}>
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{
        background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)'
      }}>
        <Quote className="w-6 h-6 text-white" />
      </div>

      {/* Google Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
        <svg className="w-4 h-4" viewBox="0 0 48 48">
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <span className="text-xs font-semibold text-gray-700">Google</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4 mt-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-14 h-14 rounded-full border-2"
          style={{borderColor: '#135c8e'}}
        />
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-4 flex-1">
        "{review.review}"
      </p>

      {/* Date */}
      <div className="text-sm text-gray-400 font-medium">
        {review.date}
      </div>

      {/* Verified Badge */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          Verified
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;