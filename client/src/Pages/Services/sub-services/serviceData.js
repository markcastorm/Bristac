// Service data configuration for all Bristac services
export const servicesData = {
  "electrical-installation": {
    name: "Installation",
    fullName: "Electrical Installation",
    slug: "electrical-installation",
    category: "ELECTRICAL INSTALLATION",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=2000&h=1200&fit=crop&q=80",
    logo: null, // Optional logo
    description: "Complete electrical installations for residential, commercial, and industrial properties. From wiring and lighting to electrical panel upgrades, our expert technicians ensure seamless installations that meet industry standards.",
    subServices: [
      "Residential Wiring",
      "Commercial Installations",
      "Industrial Power Systems",
      "Lighting Solutions",
      "Electrical Panel Upgrades"
    ]
  },
  "infrastructure-mv-hv": {
    name: "Infrastructure",
    fullName: "Infrastructure - MV/HV",
    slug: "infrastructure-mv-hv",
    category: "INFRASTRUCTURE - MV/HV",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "Reliable medium and high voltage electrical infrastructure solutions. Expert power transmission, distribution systems, and complete substation design and installation services for industrial applications.",
    subServices: [
      "Medium Voltage Systems",
      "High Voltage Distribution",
      "Substation Solutions",
      "Power Transmission",
      "Grid Infrastructure"
    ]
  },
  "ulv-systems": {
    name: "ULV Systems",
    fullName: "Ultra Low Voltage Systems",
    slug: "ulv-systems",
    category: "ULV SYSTEMS",
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "Advanced ultra-low voltage solutions including security systems, building management systems (BMS), fire alarm installations, and intelligent automation for modern buildings.",
    subServices: [
      "Security Systems",
      "Access Control",
      "Building Management Systems (BMS)",
      "Fire Alarm Systems",
      "CCTV & Surveillance"
    ]
  },
  "ict-solutions": {
    name: "ICT Solutions",
    fullName: "Information & Communication Technology",
    slug: "ict-solutions",
    category: "ICT SOLUTIONS",
    heroImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "High-speed fiber optic networks, structured cabling, and complete active and passive network infrastructure setup for businesses and industrial facilities.",
    subServices: [
      "Fiber Optic Networks",
      "Structured Cabling",
      "Active Networks",
      "Passive Networks",
      "Network Equipment Setup"
    ]
  },
  "renewable-energy": {
    name: "Renewable",
    fullName: "Renewable Energy Solutions",
    slug: "renewable-energy",
    category: "RENEWABLE ENERGY",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "Sustainable solar power systems with professional panel installation and maintenance services. Clean energy solutions for residential, commercial, and industrial applications.",
    subServices: [
      "Solar Panel Installation",
      "Solar System Design",
      "Solar Maintenance",
      "Energy Storage Solutions",
      "Green Energy Consulting"
    ]
  },
  "mechanical-hvac": {
    name: "HVAC",
    fullName: "Mechanical & HVAC Services",
    slug: "mechanical-hvac",
    category: "MECHANICAL/HVAC",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "Professional climate control and ventilation solutions. Complete HVAC system design, installation, and maintenance for optimal indoor air quality and comfort.",
    subServices: [
      "HVAC Installation",
      "Climate Control Systems",
      "Ventilation Solutions",
      "Air Quality Management",
      "HVAC Maintenance"
    ]
  },
  "facility-management": {
    name: "Facility",
    fullName: "Facility Management Services",
    slug: "facility-management",
    category: "FACILITY MANAGEMENT",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop&q=80",
    logo: null,
    description: "Comprehensive building maintenance and management solutions. Complete facility services ensuring your infrastructure operates at peak efficiency and reliability.",
    subServices: [
      "Building Maintenance",
      "Property Management",
      "Technical Support",
      "Preventive Maintenance",
      "Emergency Response"
    ]
  }
};

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return servicesData[slug] || null;
};

// Helper function to get all service slugs (useful for routing)
export const getAllServiceSlugs = () => {
  return Object.keys(servicesData);
};
