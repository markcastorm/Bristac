import React, { useState, useEffect } from 'react';
import { TbWorldBolt } from "react-icons/tb";

const Introduction = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Process steps for electrical services
  const processSteps = [
    {
      id: 0,
      title: "Initial Consultation",
      description: "Every great electrical project starts with understanding your needs. We listen, assess, and provide expert guidance to ensure your electrical systems meet your specific requirements.",
      progress: 0
    },
    {
      id: 1,
      title: "Planning & Design",
      description: "Our certified electricians create detailed plans and designs that prioritize safety, efficiency, and compliance with all electrical codes and standards.",
      progress: 20
    },
    {
      id: 2,
      title: "Professional Installation",
      description: "Using cutting-edge tools and proven techniques, our expert team delivers precise installations that stand the test of time.",
      progress: 40
    },
    {
      id: 3,
      title: "Testing & Commissioning",
      description: "Every installation undergoes rigorous testing to ensure optimal performance, safety, and reliability before we consider the job complete.",
      progress: 60
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "Your electrical systems require care, and we're here for maintenance, troubleshooting, and emergency support whenever you need us.",
      progress: 80
    }
  ];

  // Auto-advance steps every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [processSteps.length]);

  // Update progress when active step changes
  useEffect(() => {
    setProgress(processSteps[activeStep].progress);
  }, [activeStep, processSteps]);

  const circumference = 2 * Math.PI * 78; // radius = 78
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section id="home-introduction" className="">
      {/* Desktop Layout */}
      <div className="h-max xl:min-h-[700px] hidden lg:grid grid-cols-2">
        {/* Left Column - Logo and Main Text */}
        <div className="container flex flex-col justify-center items-center px-8">
          <div className="text-orange-600 w-20 2xl:w-28 mb-8">
            <TbWorldBolt className="w-full h-full text-orange-600" />
          </div>
          <div className="lg:min-h-[300px] flex items-center">
            <p className="introduction-text text-3xl xl:text-4xl font-semibold leading-tight text-center text-orange-600 line-clamp-7" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}>
              {processSteps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Right Column - Interactive Circle and Background */}
        <div className="flex flex-col justify-evenly items-center bg-orange-600 py-8 gap-8 overflow-hidden relative">
          {/* Background Image */}
          <div className="overflow-hidden absolute inset-0 brightness-[0.6]">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Electrical work"
              className="w-full h-full block object-cover h-[110%]"
              style={{ transform: 'translate3d(0px, -9.5918px, 0px)' }}
            />
          </div>

          {/* Title */}
          <p className="relative text-4xl font-serif font-light text-white overflow-hidden py-1 px-8 text-center leading-none">
            Your trusted Electrical Partners
          </p>

          {/* Interactive Circle */}
          <div className="relative mb-8">
            <div className="w-56 xl:w-64 2xl:w-80 h-56 xl:h-64 2xl:h-80 relative -rotate-90">
              <svg 
                viewBox="0 0 160 160" 
                className="progress-bar h-full w-full"
              >
                {/* Background Circle */}
                <circle 
                  r="78" 
                  cx="80" 
                  cy="80" 
                  fill="transparent" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="1px"
                />
                {/* Progress Circle */}
                <circle 
                  className="thumb transition-all duration-1000 ease-out" 
                  r="78" 
                  cx="80" 
                  cy="80" 
                  fill="transparent" 
                  stroke="#fff" 
                  strokeWidth="1px" 
                  strokeLinecap="round" 
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
            </div>

            {/* Step Indicators */}
            <div className="text-white">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`group/step absolute inset-0 -rotate-90 pointer-events-none transition-opacity duration-500 ${
                    index === activeStep ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div 
                    className="absolute inset-0" 
                    style={{ transform: `rotate(calc((360deg/${processSteps.length})*${index}))` }}
                  >
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-white relative">
                        <div className="absolute inset-0 rotate-90">
                          <div 
                            className="absolute inset-0" 
                            style={{ transform: `rotate(calc((-360deg/${processSteps.length})*${index}))` }}
                          >
                            <div className={`pointer-events-auto absolute z-40 ${
                              index < 3 
                                ? 'top-1/2 translate-y-[calc(-100%-10px)] left-1/2 -translate-x-1/2 text-center'
                                : 'top-1/2 -translate-y-1/2 -translate-x-full -left-4 text-right'
                            }`}>
                              <button 
                                onClick={() => setActiveStep(index)}
                                className="uppercase text-xs xl:text-sm max-w-[120px] 2xl:max-w-[150px] w-max leading-tight block hover:text-orange-200 transition-colors"
                              >
                                {step.title}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8 py-12 px-8 text-orange-600">
        <p className="text-4xl font-serif font-light">Your trusted Electrical Partners</p>
        
        {/* Mobile Steps Navigation */}
        <div className="flex flex-col relative">
          <div className="border-l border-orange-600 absolute left-0 top-0 bottom-0 w-px"></div>
          {processSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`pl-4 py-1 border-l border-orange-600/20 transition-colors duration-300 text-left ${
                index === activeStep ? 'text-orange-600' : 'text-orange-600/40'
              }`}
            >
              <span className="text-lg first-letter:capitalize inline-block">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Content */}
        <div className="flex flex-col">
          <div className="text-orange-600 w-12 h-10 mb-4">
            <TbWorldBolt className="w-full h-full" />
          </div>
          
          {/* Mobile Step Content */}
          <div className="min-h-[120px]">
            <span className="text-3xl leading-tight font-semibold text-center block" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}>
              {processSteps[activeStep].description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;