import React from 'react';

const ServiceHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section_collection-hero bg-[#2c3e38] text-[#f7e5e6] relative overflow-hidden">
        <div className="padding-global px-[35.9667px] py-24 md:py-32 mx-auto max-w-[1848.07px]">
          <div className="collection-hero_component flex flex-col items-start relative h-[368.017px]">

            {/* Heading Wrapper */}
            <div className="collection-hero_heading-wrapper overflow-hidden">
              <div className="text-style-allcaps">
                <h3
                  className="hero-heading-display text-[4.5rem] font-serif-custom italic font-normal leading-[1.09] text-left"
                  aria-label="Professional electrical services you can trust"
                >
                  {/* Animated Text Lines */}
                  <div className="overflow-hidden">
                    <div
                      className="animate-reveal [animation-delay:0ms]"
                      aria-hidden="true"
                    >
                      Professional
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="animate-reveal [animation-delay:150ms]"
                      aria-hidden="true"
                    >
                      electrical services
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="animate-reveal [animation-delay:300ms]"
                      aria-hidden="true"
                    >
                      you can trust
                    </div>
                  </div>
                </h3>
              </div>
            </div>

            {/* Text Wrapper */}
            <div className="collection-hero_text-wrapper mt-8 max-w-md animate-reveal [animation-delay:500ms] opacity-0">
              <p
                className="text-size-regular font-sans-custom text-base md:text-lg leading-relaxed"
                aria-label="Comprehensive electrical installation, maintenance, and 24/7 emergency services for residential, commercial, and industrial properties"
              >
                <div className="overflow-hidden">
                  <div aria-hidden="true">
                    Comprehensive electrical installation, maintenance,
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div aria-hidden="true">
                    and 24/7 emergency services for residential,
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div aria-hidden="true">
                    commercial, and industrial properties.
                  </div>
                </div>
              </p>
            </div>

            {/* Decorative Square Icon */}
            <div className="collection-hero_sqaure-wrapper absolute top-1/2 right-[5%] -translate-y-1/2 hidden lg:block animate-reveal [animation-delay:700ms] opacity-0">
              <img
                src="https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/67778d1cf609f1ebe5f7142f_Isolation_Mode.svg"
                loading="lazy"
                alt=""
                className="collection-hero_sqaure-image w-20 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video/Image Section */}
      <section className="section_collection-video w-full relative overflow-hidden">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1440&auto=format&fit=crop"
            loading="lazy"
            alt="Professional electrical installation and maintenance by Bristac Enterprises - modern electrical panel and wiring systems"
            className="collection-video absolute top-0 left-0 w-full h-full object-cover scale-105 transition-transform duration-800 ease-out hover:scale-100"
          />
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
