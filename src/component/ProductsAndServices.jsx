import React from 'react';
import NavBar from './NavBar';

const services = [
  {
    title: "Ultrasonic Gel",
    description: "A specialized gel for ultrasonic devices, ensuring proper conductivity and effectiveness in treatments.",
    icon: "💧", // You can replace this with an appropriate icon or emoji
  },
  {
    title: "Fertilizer",
    description: "High-quality fertilizers to promote healthy growth and better yields for your crops.",
    icon: "🌱", // Again, choose an appropriate icon
  },
  {
    title: "Good Crop",
    description: "Ensure optimal crop growth with our agricultural solutions for improved harvest and sustainability.",
    icon: "🌾", // You can use other icons or emojis to represent crops
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
