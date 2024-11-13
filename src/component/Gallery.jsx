import React, { useState } from 'react';
import NavBar from './NavBar';

// Sample images array with text
const images = [
  { src: "./rename.jpg", text: "We are thrilled to announce our outstanding achievement in the recent creativity competition! Our team's innovative approach, passion for originality, and dedication to excellence have set us apart, leading us to secure the top spot." },
  { src: "./awardall.jpg", text: "We are thrilled to announce our outstanding achievement in the recent creativity competition! Our team's innovative approach, passion for originality, and dedication to excellence have set us apart, leading us to secure the top spot." },
  { src: "./award.jpg", text: "We are thrilled to announce our outstanding achievement in the recent creativity competition! Our team's innovative approach, passion for originality, and dedication to excellence have set us apart, leading us to secure the top spot." },
  { src: "./product.jpg", text: "We are thrilled to announce our outstanding achievement in the recent creativity competition! Our team's innovative approach, passion for originality, and dedication to excellence have set us apart, leading us to secure the top spot." },
  { src: "./1.jpeg", text: "Entrepreneurship Mindset and Idea Development Training On March 2024, we had had a training session on entrepreneurship mindset and idea development delivered by BiTec Entrepreneurship and business incubation center, Bhirdar University." },
  { src: "./2.jpeg", text: "First pitching experience On April 2024, we had pitched our innovative idea titled Production of ultrasound gel from aloe vera leaves for the first time and stood 3rd from eighteen business ideas." },
  { src: "./3.png", text: "Presenting our Business Idea MVP on an exhibition On May 2024 we had participated on an exhibition bringing MVP of our business idea to welcome the new president of Bahirdar university with his higher official dignitaries." },
  { src: "./4.jpeg", text: "1st place National Pitch Winning On August 2024, we won 1st place the national agro business idea competition organized by GIZ, R&D groups and Growth Africa at Nexus international hotel, Addis Ababa." },
  // Add more images as needed
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <NavBar />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Title Section */}
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8 overflow-hidden">Gallery</h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full p-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
          >
            <button
              className="absolute top-2 right-1 text-gray-600 text-20 hover:text-gray-800"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedImage.src}
              alt="Selected"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{selectedImage.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
