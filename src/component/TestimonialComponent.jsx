import React from 'react';
const testimonials = [
  {
    name: "Felicia Abanka",
    designation: "CEO at East Africa Comptition Group",
    text: "This service is outstanding! It helped us streamline our operations and increase productivity. Highly recommended.",
    image: "/Felicia_Abanka.png"
  },
  {
    name: "Nat Kwateng",
    designation: "Founder of East Africa Food security",
    text: "Amazing experience! The team is professional, and the results exceeded our expectations. I would definitely work with them again.",
    image: "./Nat_kwateng.png"
  },
  {
    name: "Emile Sarfoa",
    designation: "Marketing Head at East Africa PLC ",
    text: "Working with this team has been a game changer. Their innovative approach to solving problems is impressive.",
    image: "Emile_Sarfoa.png"
  }
];

const TestimonialCard = ({ name, designation, text, image }) => {
  return (
    <div className="max-w-sm p-4 bg-white border rounded-lg shadow-lg space-y-4">
      <img src={image} alt={name} className="w-20 h-15 rounded-full mx-auto" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-center text-gray-500">{designation}</p>
      
       <p className="text-center text-gray-700">{text}</p>
       <svg
    height="44px"
    width="44px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 25.63 25.63"
    xmlSpace="preserve"
    fill="#ffd642"
    stroke="#ffd642"
 className='m-auto'
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          style={{ fill: "#ffd642" }}
          d="M12.812,0.435C5.736,0.435,0,5.499,0,11.747c0,3.168,1.479,6.028,3.855,8.082 c-0.521,3.01-3.883,4.23-3.652,5.059c2.84,1.175,8.529-1.412,9.918-2.083c0.869,0.164,1.768,0.255,2.691,0.255 c7.076,0,12.813-5.064,12.813-11.313S19.888,0.435,12.812,0.435z M11.904,12.218c0,3.076-1.361,4.802-4.043,5.129 c-0.006,0.001-0.01,0.001-0.016,0.001c-0.029,0-0.061-0.011-0.082-0.031c-0.027-0.023-0.043-0.058-0.043-0.094V15.66 c0-0.046,0.025-0.088,0.064-0.109c1.223-0.667,1.834-1.717,1.865-3.207H7.845c-0.068,0-0.125-0.056-0.125-0.125V8.286 c0-0.069,0.057-0.125,0.125-0.125h3.934c0.068,0,0.125,0.056,0.125,0.125V12.218z M18.869,12.218c0,3.029-1.205,4.563-4.033,5.128 c-0.008,0.001-0.016,0.002-0.024,0.002c-0.029,0-0.057-0.01-0.08-0.028c-0.029-0.023-0.045-0.06-0.045-0.097V15.66 c0-0.046,0.025-0.088,0.064-0.109c1.223-0.667,1.834-1.717,1.865-3.207h-1.804c-0.068,0-0.125-0.056-0.125-0.125V8.286 c0-0.069,0.057-0.125,0.125-0.125h3.932c0.07,0,0.125,0.056,0.125,0.125V12.218z"
        ></path>
      </g>
    </g>
  </svg>
    </div>
  );
};

const TestimonialComponent = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Testimonials</h2>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
