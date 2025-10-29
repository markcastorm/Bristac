import React, { useState, useEffect } from 'react';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Bristac Enterprises Solutions Data
  const allSolutions = [
    // Electrical Installation (indices 0-2)
    {
      id: 1,
      category: 'electrical',
      categoryName: 'Electrical Installation',
      categoryIndex: 0,
      title: 'RESIDENTIAL ELECTRICAL SOLUTIONS',
      subtitle: 'Electrical Installation',
      description: 'Complete wiring, lighting, and electrical panel upgrades for homes',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop',
      tag: 'Installation'
    },
    {
      id: 2,
      category: 'electrical',
      categoryName: 'Electrical Installation',
      categoryIndex: 0,
      title: 'COMMERCIAL ELECTRICAL SYSTEMS',
      subtitle: 'Electrical Installation',
      description: 'Professional electrical installations for businesses and offices',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=1080&fit=crop',
      tag: 'Installation'
    },
    {
      id: 3,
      category: 'electrical',
      categoryName: 'Electrical Installation',
      categoryIndex: 0,
      title: 'INDUSTRIAL POWER DISTRIBUTION',
      subtitle: 'Electrical Installation',
      description: 'Heavy-duty electrical systems for manufacturing facilities',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop',
      tag: 'Installation'
    },
    // Infrastructure (indices 3-5)
    {
      id: 4,
      category: 'infrastructure',
      categoryName: 'Infrastructure - MV/HV',
      categoryIndex: 1,
      title: 'MEDIUM VOLTAGE SYSTEMS',
      subtitle: 'Infrastructure - Medium Voltage',
      description: 'Reliable medium voltage electrical infrastructure solutions',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop',
      tag: 'Infrastructure'
    },
    {
      id: 5,
      category: 'infrastructure',
      categoryName: 'Infrastructure - MV/HV',
      categoryIndex: 1,
      title: 'HIGH VOLTAGE DISTRIBUTION',
      subtitle: 'Infrastructure - High Voltage',
      description: 'Expert high voltage power transmission and distribution',
      image: 'https://images.unsplash.com/photo-1509390874777-7a4a1b5db07e?w=1920&h=1080&fit=crop',
      tag: 'Infrastructure'
    },
    {
      id: 6,
      category: 'infrastructure',
      categoryName: 'Infrastructure - MV/HV',
      categoryIndex: 1,
      title: 'SUBSTATION SOLUTIONS',
      subtitle: 'Infrastructure - Power Management',
      description: 'Complete substation design and installation services',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=1080&fit=crop',
      tag: 'Infrastructure'
    },
    // ULV Systems (indices 6-8)
    {
      id: 7,
      category: 'ulv',
      categoryName: 'ULV Systems',
      categoryIndex: 2,
      title: 'SECURITY SYSTEMS',
      subtitle: 'ULV - Security',
      description: 'Advanced access control and surveillance solutions',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=1080&fit=crop',
      tag: 'Security'
    },
    {
      id: 8,
      category: 'ulv',
      categoryName: 'ULV Systems',
      categoryIndex: 2,
      title: 'BUILDING MANAGEMENT SYSTEMS',
      subtitle: 'ULV - BMS',
      description: 'Intelligent automation and control for modern buildings',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
      tag: 'BMS'
    },
    {
      id: 9,
      category: 'ulv',
      categoryName: 'ULV Systems',
      categoryIndex: 2,
      title: 'FIRE ALARM SYSTEMS',
      subtitle: 'ULV - Fire Safety',
      description: 'Life-saving fire detection and alarm installations',
      image: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=1920&h=1080&fit=crop',
      tag: 'Fire Alarm'
    },
    // ICT Solutions (indices 9-10)
    {
      id: 10,
      category: 'ict',
      categoryName: 'ICT Solutions',
      categoryIndex: 3,
      title: 'FIBER OPTIC NETWORKS',
      subtitle: 'ICT - Fiber Infrastructure',
      description: 'High-speed fiber optic cabling and network solutions',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop',
      tag: 'Fiber'
    },
    {
      id: 11,
      category: 'ict',
      categoryName: 'ICT Solutions',
      categoryIndex: 3,
      title: 'ACTIVE & PASSIVE NETWORKS',
      subtitle: 'ICT - Network Infrastructure',
      description: 'Complete structured cabling and network equipment setup',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop',
      tag: 'Network'
    },
    // Renewable Energy (index 11)
    {
      id: 12,
      category: 'renewable',
      categoryName: 'Renewable Energy',
      categoryIndex: 4,
      title: 'SOLAR POWER SYSTEMS',
      subtitle: 'Renewable Energy',
      description: 'Sustainable solar panel installation and maintenance',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop',
      tag: 'Solar'
    },
    // Mechanical/HVAC (index 12)
    {
      id: 13,
      category: 'mechanical',
      categoryName: 'Mechanical/HVAC',
      categoryIndex: 5,
      title: 'HVAC SYSTEMS',
      subtitle: 'Mechanical/HVAC',
      description: 'Climate control and ventilation solutions',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop',
      tag: 'HVAC'
    },
    // Facility Management (index 13)
    {
      id: 14,
      category: 'facility',
      categoryName: 'Facility Management',
      categoryIndex: 6,
      title: 'COMPREHENSIVE FACILITY SERVICES',
      subtitle: 'Facility Management',
      description: 'Complete building maintenance and management solutions',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
      tag: 'Facility'
    }
  ];

  // Tab configuration
  const tabs = [
    { id: 'electrical', name: 'Electrical Installation', count: 3 },
    { id: 'infrastructure', name: 'Infrastructure - MV/HV', count: 3 },
    { id: 'ulv', name: 'ULV Systems', count: 3 },
    { id: 'ict', name: 'ICT Solutions', count: 2 },
    { id: 'renewable', name: 'Renewable Energy', count: 1 },
    { id: 'mechanical', name: 'Mechanical/HVAC', count: 1 },
    { id: 'facility', name: 'Facility Management', count: 1 }
  ];

  const totalSlides = allSolutions.length;

  // Update active tab based on current slide's category
  useEffect(() => {
    const currentSolution = allSolutions[currentSlide];
    if (currentSolution && currentSolution.categoryIndex !== activeTab) {
      setActiveTab(currentSolution.categoryIndex);
    }
  }, [currentSlide]);

  // Handle tab click - scroll to first card of that category
  const handleTabClick = (tabIndex) => {
    const firstCardOfCategory = allSolutions.findIndex(
      solution => solution.categoryIndex === tabIndex
    );
    
    if (firstCardOfCategory !== -1) {
      setIsTransitioning(true);
      setCurrentSlide(firstCardOfCategory);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  // Scroll to next/previous slide
  const scrollToSlide = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'next' && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (direction === 'prev' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Handle clicking on non-active card
  const handleCardClick = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <section className="bg-gray-50 py-12 lg:py-32 flex flex-col items-center gap-4 xl:gap-8">
      {/* Section Title */}
      <div className="overflow-hidden">
        <h2 
          className="text-red-600 font-serif font-light text-4xl md:text-5xl lg:text-6xl uppercase leading-none text-center tracking-tight"
          style={{ 
            opacity: 1,
            animation: 'fadeInUp 0.8s ease-out'
          }}
        >
          <span>OUR</span> <span>SOLUTIONS</span>
        </h2>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs border-b border-black/10 w-full max-w-7xl px-4 lg:px-8">
        <div className="relative translate-y-px">
          <ul className="flex justify-center flex-wrap lg:flex-nowrap gap-2 lg:gap-4">
            {tabs.map((tab, index) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleTabClick(index)}
                  className={`
                    flex gap-2 items-baseline px-2 py-3 first-letter:capitalize 
                    text-sm lg:text-base xl:text-lg font-serif font-light 
                    border-b-2 border-transparent transition-all duration-500 whitespace-nowrap
                    ${activeTab === index 
                      ? 'text-red-600 opacity-100 border-red-600' 
                      : 'opacity-30 hover:text-red-600 hover:opacity-70'
                    }
                  `}
                >
                  <span>{tab.name}</span>
                  <div className="-translate-y-1 w-5 h-5 flex items-center justify-center bg-current rounded-full text-xs font-sans">
                    <span className="text-white">{tab.count}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Solutions Slider Container */}
      <div 
        className="solutions-container w-full my-4 lg:my-12 relative"
        style={{ minHeight: '650px' }}
      >
        {/* Slides Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible px-4 lg:px-20">
          <div className="relative w-full max-w-7xl" style={{ height: '550px' }}>
            {allSolutions.map((solution, index) => {
              const offset = index - currentSlide;
              const isActive = index === currentSlide;
              const isAdjacent = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <article
                  key={solution.id}
                  className={`
                    absolute left-1/2 top-0
                    solution-card cursor-pointer
                    transition-all duration-700 ease-out
                    ${isActive ? 'z-30' : isAdjacent ? 'z-20' : 'z-10'}
                  `}
                  style={{
                    transform: `
                      translateX(calc(-50% + ${offset * 45}%))
                      scale(${isActive ? 1 : isAdjacent ? 0.85 : 0.7})
                    `,
                    opacity: 1, // All cards fully visible
                    pointerEvents: 'auto', // All cards clickable
                    width: 'clamp(600px, 55vw, 900px)',
                    height: 'clamp(400px, 35vw, 550px)',
                    filter: isActive ? 'none' : 'brightness(0.7)' // Dimmed but not faded
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="relative w-full h-full group rounded-lg overflow-hidden shadow-2xl">
                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <div 
                        className={`
                          absolute inset-0 transition-all duration-700
                          ${isActive ? 'scale-110' : 'scale-100'}
                        `}
                        style={{ 
                          filter: 'brightness(0.65)',
                        }}
                      >
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col text-white">
                        {/* Tag Badge */}
                        <header className="flex items-start justify-between">
                          <div className="ml-auto">
                            <div className="flex rounded-md overflow-hidden font-serif text-xs uppercase h-7 leading-none whitespace-nowrap bg-white text-black px-3 items-center gap-2">
                              <span className="pt-0.5">{solution.tag}</span>
                            </div>
                          </div>
                        </header>

                        {/* Main Content */}
                        <main 
                          className={`
                            grow flex flex-col gap-3 items-center justify-center px-4
                            transition-all duration-700
                            ${isActive ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-95'}
                          `}
                        >
                          <h3 className="text-3xl lg:text-4xl xl:text-5xl text-center max-w-[90%] leading-tight">
                            <span className="font-serif text-xl lg:text-2xl font-light italic block mb-2">
                              {solution.subtitle}
                            </span>
                            <span className="uppercase font-serif tracking-wide">
                              {solution.title}
                            </span>
                          </h3>
                          <p className="text-sm lg:text-base text-center max-w-md opacity-90">
                            {solution.description}
                          </p>
                        </main>
                      </div>

                      {/* Bottom Preview Bar - shows on non-active slides */}
                      <div 
                        className={`
                          absolute bottom-0 left-0 right-0 h-20 bg-gray-50
                          transition-all duration-700 origin-bottom
                          ${isActive ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}
                        `}
                      >
                        <div className="p-3 h-full flex items-center">
                          <p className="font-serif font-light text-black text-sm leading-tight">
                            <span className="italic text-xs block">{solution.subtitle}</span>
                            <span className="block truncate">{solution.title}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-40">
          {/* Previous Button */}
          <button
            onClick={() => scrollToSlide('prev')}
            disabled={currentSlide === 0}
            className={`
              w-12 h-12 rounded-full 
              bg-white shadow-lg border border-gray-200
              flex items-center justify-center
              transition-all duration-300 hover:scale-110 hover:border-red-600
              ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
            `}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {allSolutions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${currentSlide === index 
                    ? 'bg-red-600 w-8' 
                    : 'bg-gray-400 w-2 hover:bg-gray-600'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scrollToSlide('next')}
            disabled={currentSlide === totalSlides - 1}
            className={`
              w-12 h-12 rounded-full 
              bg-white shadow-lg border border-gray-200
              flex items-center justify-center
              transition-all duration-300 hover:scale-110 hover:border-red-600
              ${currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
            `}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .solution-card {
          will-change: transform, opacity;
        }

        @media (max-width: 1024px) {
          .solution-card {
            width: 85vw !important;
          }
        }

        @media (max-width: 768px) {
          .solution-card {
            width: 90vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;