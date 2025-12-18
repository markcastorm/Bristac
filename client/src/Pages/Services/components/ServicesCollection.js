import React, { useState, useEffect, useRef } from 'react';

// --- Bristac Electrical Services Data ---
const servicesData = [
  {
    id: 1,
    name: "Installation",
    slug: "/services/electrical-installation",
    category: "ELECTRICAL INSTALLATION",
    description: "Complete electrical installations for residential, commercial, and industrial properties. From wiring and lighting to electrical panel upgrades, our expert technicians ensure seamless installations that meet industry standards.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Infrastructure",
    slug: "/services/infrastructure-mv-hv",
    category: "INFRASTRUCTURE - MV/HV",
    description: "Reliable medium and high voltage electrical infrastructure solutions. Expert power transmission, distribution systems, and complete substation design and installation services for industrial applications.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 3,
    name: "ULV Systems",
    slug: "/services/ulv-systems",
    category: "ULV SYSTEMS",
    description: "Advanced ultra-low voltage solutions including security systems, building management systems (BMS), fire alarm installations, and intelligent automation for modern buildings.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 4,
    name: "ICT Solutions",
    slug: "/services/ict-solutions",
    category: "ICT SOLUTIONS",
    description: "High-speed fiber optic networks, structured cabling, and complete active and passive network infrastructure setup for businesses and industrial facilities.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Renewable",
    slug: "/services/renewable-energy",
    category: "RENEWABLE ENERGY",
    description: "Sustainable solar power systems with professional panel installation and maintenance services. Clean energy solutions for residential, commercial, and industrial applications.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 6,
    name: "HVAC",
    slug: "/services/mechanical-hvac",
    category: "MECHANICAL/HVAC",
    description: "Professional climate control and ventilation solutions. Complete HVAC system design, installation, and maintenance for optimal indoor air quality and comfort.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Facility",
    slug: "/services/facility-management",
    category: "FACILITY MANAGEMENT",
    description: "Comprehensive building maintenance and management solutions. Complete facility services ensuring your infrastructure operates at peak efficiency and reliability.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80"
  }
];

// --- Custom Hook for Scroll Detection ---
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // Update visibility based on whether element is intersecting
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

// --- Main Component ---
const ServicesCollection = () => {
  return (
    <div className="section_collection-collection w-full">
      <div className="collection-component">
        <div className="brand-collection_list-wrapper">
          <div role="list" className="w-full">
            {servicesData.map((service, index) => (
              <CollectionItem key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Individual Item Component ---
const CollectionItem = ({ service, index }) => {
  // 1. Color Logic - alternating backgrounds
  const isEven = index % 2 === 0;
  const backgroundColor = isEven ? 'bg-[#36413E]' : 'bg-[#322825]';
  const textColor = 'text-[#EFD3D7]';

  // 2. Scroll Animation Logic
  // Threshold 0.2 means animation starts when 20% of item is visible
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.2 });

  // 3. Custom Cursor Logic
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    // Get cursor position relative to the viewport
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={ref}
      role="listitem"
      className={`collection-template_item w-full py-20 md:py-32 ${backgroundColor} ${textColor} overflow-hidden`}
    >
      <div className="collection-template-wrapper-copy w-full">
        <div className="padding-global px-5 md:px-12">
          {/* Container constrained to requested dimensions */}
          <div className="container-large w-full max-w-[1115px] mx-auto">
            <div className="collection-template-component flex flex-col gap-10 relative">

              {/* --- IMAGE LINK WRAPPER --- */}
              <a
                href={service.slug}
                className="collection_template-image-wrapper group relative block w-full cursor-none" // cursor-none hides default pointer
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >

                {/* --- TITLE (Overlapping with slide-up animation) --- */}
                <div className="collection_heading-wrapper absolute -top-10 left-0 z-30 pointer-events-none overflow-hidden">
                  <h3
                    className={`collection-heading font-serif-custom italic text-[3.5rem] md:text-[5rem] font-normal tracking-[-0.03em] leading-none transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* --- CUSTOM CURSOR (Follower) --- */}
                <div
                  className="fixed pointer-events-none z-50 flex flex-col items-center justify-center bg-[#EFD3D7] text-[#342C27] rounded-full w-24 h-24 mix-blend-normal transition-opacity duration-300 ease-out"
                  style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: 'translate(-50%, -50%)', // Center div on cursor
                    opacity: isHovering ? 1 : 0
                  }}
                >
                  <div className="w-2 h-2 bg-[#342C27] rounded-full mb-1"></div>
                  <div className="text-sm font-medium uppercase tracking-wider">View</div>
                </div>

                {/* --- IMAGE CONTAINER with slide-up animation --- */}
                <div className={`collection_template-image-template w-full aspect-video md:aspect-auto md:h-[518px] overflow-hidden relative z-10 transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-95'}`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="collection_template-image w-full h-full object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                </div>
              </a>

              {/* --- BOTTOM TEXT CONTENT with staggered slide-up animations --- */}
              <div className="collection-template-content-wrapper flex flex-col md:flex-row justify-between items-start pt-2 gap-8 md:gap-0">

                {/* Category with slide-up animation */}
                <div className="collection-template_origin md:w-1/3 overflow-hidden">
                  <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70 mb-2 font-sans-custom">
                      Service Category
                    </div>
                    <div className="text-lg md:text-xl font-normal tracking-wide font-sans-custom uppercase">
                      {service.category}
                    </div>
                  </div>
                </div>

                {/* Description with slide-up animation */}
                <div className="collection-template-text md:w-[55%] lg:w-[50%] overflow-hidden">
                  <div className={`transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-sm md:text-[15px] font-light leading-relaxed opacity-90 font-sans-custom text-justify md:text-left">
                      {service.description}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCollection;
