import React from 'react';

const testimonials = [
  {
    name: "Alemayehu Eshete",
    designation: "CEO at BDU",
    text: "This service is outstanding! It helped us streamline our operations and increase productivity. Highly recommended.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Tsega Birhanu",
    designation: "Founder of Ethio Food security",
    text: "Amazing experience! The team is professional, and the results exceeded our expectations. I would definitely work with them again.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Yohanis Ashenafi",
    designation: "Marketing Head at BDU",
    text: "Working with this team has been a game changer. Their innovative approach to solving problems is impressive.",
    image: "https://via.placeholder.com/100"
  }
];

const TestimonialCard = ({ name, designation, text, image }) => {
  return (
    <div className="max-w-sm p-4 bg-white border rounded-lg shadow-lg space-y-4">
      <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-center text-gray-500">{designation}</p>
      <p className="text-center text-gray-700">{text}</p>
    </div>
  );
};

const TestimonialComponent = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">What Our Clients Say</h2>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
