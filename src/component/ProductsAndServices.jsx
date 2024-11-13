import React from 'react';
import NavBar from './NavBar';

const services = [
  {
    title: "Glow ultrasound gel",
    description: "A specialized gel for ultrasound devices, ensuring proper conductivity and effectiveness in treatments.",
    icon: "💧", // Gel icon
  },
  {
    title: "Glow Organic fungicide",
    description: "An organic fungicide designed to protect plants from fungal infections and promote healthy growth.",
    icon: "🍄", // Fungus icon (or use another relevant icon)
  },
  {
    title: "Glow antifungal cream",
    description: "A topical antifungal cream that provides relief from infections and promotes healing.",
    icon: "🧴", // Cream bottle or relevant icon
  },
  {
    title: "Glow consultancy",
    description: "Professional consultancy services offering expert guidance and solutions tailored to meet diverse business needs and challenges.",
    icon: "💼", // Briefcase or relevant consultancy icon
  },
];


const ServicePage = () => {
  return (
    <>
    <NavBar></NavBar>
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 overflow-y-hidden">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the wide range of services we offer to help you grow your business and achieve success.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl h-auto overflow-y-hidden mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-500 mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicePage;
