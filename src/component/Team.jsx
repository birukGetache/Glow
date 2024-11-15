import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const testimonials = [
  {
    name: "Tariku Sharew",
    designation: "Production Team Leader",
    text: "This service is outstanding! It helped us streamline to increase productivity",
    image: "./Tariku.jpg",
    linkedin: 'https://www.linkedin.com/in/tariku-sharew/',
  },
  {
    name: "Nahoo Asteraye",
    designation: "Chief executive officer",
    text: "Environmental engineer and BSc in management",
    image: "./Nahom.jpg",
    linkedin: 'https://www.linkedin.com/in/nahoo-asteraye-tsige-89a9a92b5/',
  },
  {
    name: "Temechew Dessie Agmas",
    designation: "Marketing Head at Glow",
    text: "BSc in chemical engineer and BSc in accounting",
    image: "./image.png",
    linkedin: ' https://www.linkedin.com/in/temechew-dessie-641231237/',
  },
  {
    name: " Tsigereda Habtamu",
    designation: "Customer service",
    text: "BSc in Computer Science and BSc in accounting",
    image: "./Tsige.jpg",
    linkedin: ' https://www.linkedin.com/in/temechew-dessie-641231237/',
  },
];
const TestimonialCard = ({ name, designation, text, image , linkedin }) => {
  return (
    <div className="max-w-sm p-4 bg-white border rounded-lg shadow-lg space-y-4 mx-auto">
      <img src={image} alt={name} className="w-20 h-20 object-cover rounded-full mx-auto" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-center text-gray-500">{designation}</p>
      <p className="text-center text-gray-700">{text}</p>
      <div className="mt-2 text-gray-400 text-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <FaLinkedin className="mr-2 text-blue-600" size={30} />
        </a>
      </div>
    </div>
  );
};

const TestimonialComponent = () => {
  return (
    <div className="py-8 bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-28">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8 overflow-hidden">Teams</h2>
      <div className="flex flex-wrap justify-around gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
