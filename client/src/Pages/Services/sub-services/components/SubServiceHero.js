import React from 'react';

const SubServiceHero = ({ serviceName, serviceImage, serviceLogo }) => {
  return (
    <section className="section_individual-hero relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#2c3e38]">

      {/* Logo (if provided) */}
      {serviceLogo && (
        <img
          src={serviceLogo}
          loading="lazy"
          width="Auto"
          alt={`${serviceName} logo`}
          className="individual-hero_logo absolute top-12 left-12 z-20 w-32 md:w-48 opacity-90"
        />
      )}

      {/* Hero Component Container */}
      <div className="individual-hero_component relative w-full h-full flex flex-col items-center justify-center">

        {/* Service Name Heading with animation */}
        <div className="individual-hero_heading-wrapper relative z-10 mb-8 overflow-hidden">
          <h2
            className="individual-hero_heading font-serif-custom italic text-[#EFD3D7] text-6xl md:text-8xl lg:text-9xl font-normal leading-none tracking-tight text-center animate-reveal opacity-0"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            {serviceName}
          </h2>
        </div>

        {/* Hero Image with animation */}
        <img
          src={serviceImage}
          loading="lazy"
          alt={`${serviceName} service showcase`}
          sizes="100vw"
          className="individual-slider_image absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-scale"
          style={{
            animationDelay: '400ms',
            animationFillMode: 'forwards',
            filter: 'brightness(0.6)'
          }}
        />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-scale {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-scale {
          animation: fade-scale 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};

export default SubServiceHero;
