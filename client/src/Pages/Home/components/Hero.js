import React, { useState, useEffect } from 'react';
import { TbWorldBolt } from "react-icons/tb";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data for electrical services
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      title: 'Electrical Installation',
      subtitle: 'Professional installation services for residential, commercial, and industrial properties',
      coordinates: '01°17\'S 36°49\'E',
      location: 'Nairobi Industrial'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Smart Systems',
      subtitle: 'Advanced smart electrical systems and automation solutions',
      coordinates: '01°16\'S 36°48\'E',
      location: 'Westlands Tech Hub'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Emergency Services',
      subtitle: '24/7 emergency electrical response and repair services',
      coordinates: '01°18\'S 36°47\'E',
      location: 'Emergency Response'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Maintenance Solutions',
      subtitle: 'Proactive maintenance to keep your electrical systems optimal',
      coordinates: '01°15\'S 36°50\'E',
      location: 'Service Network'
    }
  ];

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <header id="header" className="relative z-10 bg-gray-900 min-h-[100svh] h-max transition-all flex flex-col">
      {/* Background Image Slider */}
      <div className="header-slider absolute inset-0 -z-20 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`header-slide absolute inset-0 transition-opacity duration-[2000ms] ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <div className="h-full relative brightness-75 saturate-[80%]">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full block object-cover"
                style={{ 
                  objectPosition: '50% 40%',
                  transform: 'translate3d(0px, 0px, 0px)'
                }}
              />
            </div>
            
            {/* Location Coordinates (bottom right) */}
            <div className="header-coordinates absolute z-10 text-white/80 uppercase text-xs leading-tight hidden lg:flex flex-col gap-2 opacity-100 transition-opacity duration-500 bottom-20 right-20">
              <span>{slide.coordinates}</span>
              <p className="max-w-[120px] w-full text-white/90">
                {slide.location}
              </p>
              <div className="absolute h-px rounded-full w-4 bg-white/80 top-1.5 -left-2 -translate-x-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 grow w-full -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full hidden lg:block opacity-20">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1920 1080" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated electrical circuit paths */}
            <g className="animate-pulse">
              <path 
                d="M100 300 Q 400 100 800 300 T 1500 300" 
                stroke="#ea580c" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.6"
              />
              <path 
                d="M200 500 Q 600 700 1000 500 T 1700 500" 
                stroke="#ea580c" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.4"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="w-full min-h-max h-full flex flex-col justify-center container mx-auto pt-28 text-white grow">
        <div className="relative grow flex flex-col justify-center">
          <div className="mx-auto h-full grow flex flex-col gap-8 justify-evenly items-center container px-4">
            <div className="text-center leading-tight max-w-5xl flex flex-col items-center">
              
              {/* Logo */}
              <div className="max-w-[120px] xl:max-w-[180px] mb-16">
                <div className="flex items-center justify-center gap-4">
                  <TbWorldBolt className="w-20 h-20 xl:w-24 xl:h-24 text-white" />
                  <div className="flex flex-col leading-none text-left">
                    <span 
                      className="text-sm xl:text-base font-light tracking-widest uppercase text-white/70"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      BRISTAC
                    </span>
                    <span 
                      className="text-4xl xl:text-5xl font-light tracking-wide lowercase text-white"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      enterprises
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="flex flex-col items-center">
                <span className="text-white text-2xl xl:text-3xl font-extralight md:pb-1 inline-block">
                  Your trusted
                </span>
                <span 
                  className="pb-1 pt-4 text-6xl lg:text-7xl xl:text-8xl font-light uppercase font-serif inline-block transition-all duration-1000"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  <div className="animate-fade-in">
                    <span className="inline-block">ELECTRICAL</span>{' '}
                    <span className="inline-block text-orange-600">PARTNER</span>
                  </div>
                </span>
              </h1>

              {/* Subtitle with current slide info */}
              <div className="mt-8 max-w-2xl">
                <p className="text-lg xl:text-xl text-white/90 font-light leading-relaxed transition-all duration-1000">
                  {heroSlides[currentSlide]?.subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <a 
                  href="/services" 
                  className="px-6 sm:px-8 py-4 group/action inline-flex gap-3 items-center justify-center text-base tracking-wide transition-all duration-200 focus:outline focus:outline-offset-2 focus:outline-2 active:outline-none relative bg-orange-600 text-white hover:text-white hover:brightness-90 focus:outline-orange-600 rounded-md"
                >
                  <span>Explore Our Services</span>
                  <div className="relative overflow-hidden">
                    <div className="w-5 h-5 grid place-content-center translate-x-0 translate-y-0 group-hover/action:translate-x-full group-hover/action:-translate-y-full transition-all ease-in-out duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                    <div className="w-5 h-5 grid place-content-center absolute inset-0 -translate-x-full translate-y-full group-hover/action:translate-x-0 group-hover/action:translate-y-0 transition-all ease-in-out duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3 mt-16">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-600 w-16' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;