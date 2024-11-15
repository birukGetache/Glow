import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 sm:px-8 md:px-16 lg:px-28 flex items-center justify-between bg-opacity-10 bg-black w-screen overflow-x-hidden z-11 top-0 left-0 text-white h-[10vh] box-border">
      <div className="">
        <img src="./logo.png" className="w-20 h-15" style={{ borderRadius: '30px' }} alt="Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Navigation Menu */}
      <ul className={`flex space-x-6 md:flex ${isOpen ? 'flex-col items-center gap-10 absolute bg-black z-50 bg-opacity-95 top-16 left-0 w-full h-screen' : 'hidden md:flex'}`}>
        <li className="cursor-pointer overflow-hidden h-auto">
          <a href="/" className="hover:text-white text-yellow-500 font-poppins">
            Home
          </a>
        </li>
        <li className="cursor-pointer overflow-hidden h-auto">
          <a href="/about" className="hover:text-white text-yellow-500 font-poppins">
            About
          </a>
        </li>
        <li className="cursor-pointer overflow-hidden h-auto">
          <a href="/services" className="hover:text-white text-yellow-500 font-poppins">
            Products and services
          </a>
        </li>
        <li className="cursor-pointer overflow-hidden h-auto">
          <a href="/shop" className="hover:text-white text-yellow-500 font-poppins">
            Shop
          </a>
        </li>
        <li className="cursor-pointer overflow-hidden h-auto">
          <a href="/gallery" className="hover:text-white text-yellow-500 font-poppins">
            Gallery
          </a>
        </li>
        <li className="cursor-pointer z-10 h-30">
          <a href="/contact" className="hover:text-white text-yellow-500 font-poppins">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
