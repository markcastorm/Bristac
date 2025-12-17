import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import SubServiceHero from './components/SubServiceHero';
import { getServiceBySlug } from './serviceData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get service data based on slug
    const serviceData = getServiceBySlug(slug);
    setService(serviceData);
    setLoading(false);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  // If service not found, redirect to services page
  if (!loading && !service) {
    return <Navigate to="/services" replace />;
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2c3e38]">
        <div className="text-[#EFD3D7] text-2xl font-serif-custom italic">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <Navbar />

      {/* Hero Section */}
      <SubServiceHero
        serviceName={service.name}
        serviceImage={service.heroImage}
        serviceLogo={service.logo}
      />

      {/* Temporary content section - you'll design this later */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif-custom italic mb-6 text-gray-800">
            {service.fullName}
          </h2>
          <p className="text-lg text-gray-600 font-sans-custom leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Sub-services list */}
          <h3 className="text-2xl font-serif-custom italic mb-4 text-gray-800">
            Our Services Include:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.subServices.map((subService, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700 font-sans-custom"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {subService}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
