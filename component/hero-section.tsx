// 'use client'
// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       title: "Welcome to Our Platform",
//       subtitle: "Experience excellence in every interaction",
//       image: "/banner1.jpg"
//     },
//     {
//       id: 2,
//       title: "Innovation Meets Design",
//       subtitle: "Crafting digital experiences that matter",
//       image: "/Website-Banner-02.jpg"
//     },
//     {
//       id: 3,
//       title: "Build Your Future",
//       subtitle: "Tools and resources for success",
//       image: "/Website-Banner-03.jpg"
//     },
//     {
//       id: 4,
//       title: "Connect & Collaborate",
//       subtitle: "Join our growing community",
//       image: "/Website-Banner-04.jpg"
//     },
//     {
//       id: 5,
//       title: "Transform Your Vision",
//       subtitle: "From ideas to reality",
//       image: "/Website-Banner-05.jpg"
//     },
//     {
//       id: 6,
//       title: "Transform Your Vision",
//       subtitle: "From ideas to reality",
//       image: "/Website-Banners-04.jpg"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const goToPrevious = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToSlide = (index : number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Slides */}
//       <div className="relative w-full h-[calc(50vh-50px)] min-h-[600px] max-h-[600px]">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Background Image with Overlay */}
//             <div className="absolute inset-0">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover max-sm:object-contain "
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/60 to-red-900/60"></div>
//             </div>

//             {/* Content */}
//             <div className="relative h-full flex items-center justify-center px-4">
//               <div className="text-center text-white max-w-6xl mx-auto">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-light animate-fade-in-delay">
//                   {slide.subtitle}
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
//                   <button
//                     style={{ backgroundColor: '#d9534f' }}
//                     className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//                   >
//                     Get Started
//                   </button>
//                   <button
//                     style={{ backgroundColor: '#135c8e' }}
//                     className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all z-20"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all z-20"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//       </button>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-8 bg-white shadow-lg'
//                 : 'w-3 bg-white/50 hover:bg-white/75 hover:w-4'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out;
//         }

//         .animate-fade-in-delay {
//           animation: fadeIn 0.8s ease-out 0.2s both;
//         }

//         .animate-fade-in-delay-2 {
//           animation: fadeIn 0.8s ease-out 0.4s both;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      subtitle: "Experience excellence in every interaction",
      image: "/banner1.jpg"
    },
    {
      id: 2,
      title: "Innovation Meets Design",
      subtitle: "Crafting digital experiences that matter",
      image: "/Website-Banner-02.jpg"
    },
    {
      id: 3,
      title: "Build Your Future",
      subtitle: "Tools and resources for success",
      image: "/Website-Banner-03.jpg"
    },
    {
      id: 4,
      title: "Connect & Collaborate",
      subtitle: "Join our growing community",
      image: "/Website-Banner-04.jpg"
    },
    {
      id: 5,
      title: "Transform Your Vision",
      subtitle: "From ideas to reality",
      image: "/Website-Banner-05.jpg"
    },
    {
      id: 6,
      title: "Transform Your Vision",
      subtitle: "From ideas to reality",
      image: "/Website-Banners-04.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index : number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides - Responsive height */}
      <div className="relative w-full h-[70vh] max-sm:h-[calc(90vh-110px)]  max-sm:min-h-[100px] min-h-[500px] max-h-[500px] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[calc(100vh-80px)]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/60 to-red-900/60"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-6 sm:w-8 bg-white shadow-lg'
                : 'w-2 sm:w-3 bg-white/50 hover:bg-white/75 hover:w-3 sm:hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        /* Extra small screens (320px-639px) */
        @media (min-width: 375px) {
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .xs\\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}