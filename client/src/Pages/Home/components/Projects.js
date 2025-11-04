import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, EffectFade, Controller, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// --- Data for our slides ---
const projectData = [
  {
    id: 1,
    brandName: 'Residential Wiring',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821e0760277e45ba7bf266a_acerbis.svg',
    projectLink: '/projects/residential',
  },
  {
    id: 2,
    brandName: 'Commercial Installation',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821de9cda018894c0a6550e_valcucine.svg',
    projectLink: '/projects/commercial',
  },
  {
    id: 3,
    brandName: 'Industrial Systems',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821de9c82ce39af333c6703_Miele.svg',
    projectLink: '/projects/industrial',
  },
  {
    id: 4,
    brandName: 'Smart Home Solutions',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821e07a4b2c515ee5209c08_QUOOKER.svg',
    projectLink: '/projects/smart-home',
  },
  {
    id: 5,
    brandName: 'Lighting Design',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821e0760277e45ba7bf266a_acerbis.svg',
    projectLink: '/projects/lighting',
  },
  {
    id: 6,
    brandName: 'Panel Upgrades',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821de9cda018894c0a6550e_valcucine.svg',
    projectLink: '/projects/panel-upgrades',
  },
  {
    id: 7,
    brandName: 'Emergency Services',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821de9c82ce39af333c6703_Miele.svg',
    projectLink: '/projects/emergency',
  },
  {
    id: 8,
    brandName: 'EV Charging Stations',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821e07a4b2c515ee5209c08_QUOOKER.svg',
    projectLink: '/projects/ev-charging',
  },
  {
    id: 9,
    brandName: 'Solar Integration',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821e0760277e45ba7bf266a_acerbis.svg',
    projectLink: '/projects/solar',
  },
  {
    id: 10,
    brandName: 'Maintenance Services',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop',
    logo: 'https://cdn.prod.website-files.com/66d001b820adfdb03c18e11d/6821de9cda018894c0a6550e_valcucine.svg',
    projectLink: '/projects/maintenance',
  },
];

const totalSlides = projectData.length;

// --- Animation Variants ---
const titleVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { y: -30, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
};

const numberVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { y: -10, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

// --- Custom Navigation Component ---
const SwiperNavButtons = ({ swiperInstance }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center transition-colors hover:bg-white/10"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center transition-colors hover:bg-white/10"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <section className="relative h-screen w-full bg-black text-white font-serif overflow-hidden">
      {/* --- Background Image Slider --- */}
      <Swiper
        modules={[EffectFade, Controller, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={setControlledSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src={project.image} 
              alt={project.brandName}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- UI Overlay --- */}
      <div className="absolute inset-0 z-20 p-8 md:p-12 lg:p-16 flex flex-col">
        {/* Top Section: Title */}
        <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.h1 
                    key={activeIndex} // This key triggers the animation on change
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-5xl md:text-6xl lg:text-7xl font-light italic"
                >
                    Experience the <br /> exceptional up close
                </motion.h1>
            </AnimatePresence>
        </div>

        {/* Bottom Section: Controls & Info */}
        <div className="mt-auto w-full flex justify-between items-end">
          
          {/* Left Side: Animated Brand Logo */}
          <div className="relative w-48 h-12 overflow-hidden">
             <motion.div
                className="absolute inset-0 flex flex-col"
                animate={{ y: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // A nice smooth ease
             >
                {projectData.map((project) => (
                    <div key={project.id} className="w-full h-full flex-shrink-0 flex items-center">
                        <img 
                            src={project.logo} 
                            alt={`${project.brandName} Logo`}
                            className="max-h-8 w-auto object-contain invert brightness-0"
                        />
                    </div>
                ))}
            </motion.div>
          </div>

          {/* Center: View Project & Counter */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={projectData[activeIndex].projectLink}
              className="text-sm tracking-wider hover:underline"
            >
              View Project
            </a>
            <div className="text-white/50 text-sm">|</div>
            <div className="flex items-center gap-1 text-sm font-mono">
                <div className="relative h-5 w-5 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeIndex}
                            variants={numberVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute inset-0 text-center"
                        >
                            {activeIndex + 1}
                        </motion.span>
                    </AnimatePresence>
                </div>
              <span>— {totalSlides}</span>
            </div>
          </div>

          {/* Right Side: Navigation */}
          <div>
            <SwiperNavButtons swiperInstance={controlledSwiper} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;