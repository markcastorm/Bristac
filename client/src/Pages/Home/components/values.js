import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Leaf, Building2 } from 'lucide-react';

// Animation variants for elements that will fade in and slide up
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Values = () => {
  // Data for the values section
  const valuesData = [
    {
      id: 1,
      icon: <Lightbulb className="w-10 h-10 lg:w-12 lg:h-12 text-[#99d1c9]" />,
      title: 'Expertise & Experience',
      description: 'With years of experience in the industry, our skilled team of professionals delivers quality workmanship and reliable service. We ensure your electrical systems meet the highest standards of safety and efficiency.',
    },
    {
      id: 2,
      icon: <Leaf className="w-10 h-10 lg:w-12 lg:h-12 text-[#99d1c9]" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and practices to offer innovative solutions that enhance efficiency and sustainability. Our commitment to innovation keeps us at the forefront of the electrical services industry.',
    },
    {
      id: 3,
      icon: <Building2 className="w-10 h-10 lg:w-12 lg:h-12 text-[#99d1c9]" />,
      title: 'Transparency',
      description: 'We believe in open communication and transparency in our operations, ensuring clarity and trust with our clients. Your satisfaction is our priority, and we strive to exceed expectations with every project.',
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      className="bg-[#1a1a1a] text-white font-serif"
    >
      <div className="max-w-8xl mx-auto py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Title */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight text-left">
              What truly <br />
              matters to us
            </h2>
          </motion.div>

          {/* Right Column: Values List */}
          <motion.div
            transition={{ staggerChildren: 0.3 }}
            className="lg:col-span-1 flex flex-col gap-16 lg:gap-20"
          >
            
            {valuesData.map((item) => (
              <motion.div variants={itemVariants} className="flex items-start gap-6" key={item.id}>
               
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                {/* Text Content */}
                <div className="flex flex-col max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-normal mb-3 text-white" style={{ fontFamily: 'Solare, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg font-sans font-light text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Values;