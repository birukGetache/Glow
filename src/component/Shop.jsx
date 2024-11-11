import React, { useState } from 'react';
import NavBar from './NavBar';

// Sample products array
const products = [
  {
    id: 1,
    name: "Ultrasonic Gell",
    description: "This is a high-quality product.",
    price: "99.99 Birr",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Fertilizer",
    description: "This product is designed to make your life easier.",
    price: "129.99 Birr",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Skin Oil",
    description: "A reliable product with outstanding features.",
    price: "1089.99 Birr",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "hair Oil",
    description: "Perfect for those looking for quality and style.",
    price: "149.99 Birr",
    image: "https://via.placeholder.com/300",
  },
  // Add more products as needed
];

const Shop = () => {
  // Filtering state
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Filter handler function
  const handleFilter = (filter) => {
    const updatedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(updatedProducts);
  };

  return (
    <>
    <NavBar></NavBar>
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8 overflow-y-hidden">Our Shop</h2>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={(e) => handleFilter(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-4">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Shop;
