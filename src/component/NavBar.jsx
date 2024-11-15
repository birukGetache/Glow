import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 sm:px-8 md:px-16 lg:px-28 flex items-center justify-between bg-opacity-10 bg-black w-screen overflow-x-hidden z-11 top-0 left-0 text-white h-[10vh] box-border">
      <div>
        <img
          src="./logo.png"
          className="w-20 h-15"
          style={{ borderRadius: '30px' }}
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          // X Icon
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Menu Icon
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
        )}
      </div>

      {/* Navigation Menu */}
      <ul
        className={`flex space-x-6 md:flex ${
          isOpen
            ? 'flex-col items-center justify-center py-20 lg:py-40 gap-10 absolute bg-black z-50 bg-opacity-95 top-[10vh] left-0 w-full h-screen'
            : 'hidden md:flex'
        }`}
      >
        <li className="cursor-pointer">
          <a href="/" className="hover:text-white text-yellow-500 font-poppins">
            Home
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="/about"
            className="hover:text-white text-yellow-500 font-poppins"
          >
            About
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="/services"
            className="hover:text-white text-yellow-500 font-poppins"
          >
            Products and services
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="/shop"
            className="hover:text-white text-yellow-500 font-poppins"
          >
            Shop
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="/gallery"
            className="hover:text-white text-yellow-500 font-poppins"
          >
            Gallery
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="/contact"
            className="hover:text-white text-yellow-500 font-poppins"
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
