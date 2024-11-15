import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 sm:px-8 md:px-16 lg:px-28 flex items-center justify-between bg-black bg-opacity-10 w-full h-[10vh] fixed top-0 left-0 text-white z-20">
      {/* Logo */}
      <div>
        <img
          src="./logo.png"
          className="w-20 h-15 rounded-full"
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu Icon (visible on mobile only) */}
      <button
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
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
      </button>

      {/* Navigation Menu */}
      <ul
        className={`flex md:flex ${
          isOpen
            ? 'flex-col items-center py-20 gap-10 absolute bg-black bg-opacity-90 top-16 left-0 w-full h-screen md:h-auto md:w-auto z-10'
            : 'hidden md:flex'
        }`}
      >
        {/** Menu Links */}
        {['Home', 'About', 'Products and services', 'Shop', 'Gallery', 'Contact us'].map((item, index) => (
          <li key={index} className="cursor-pointer overflow-hidden">
            <a
              href={`/${item.toLowerCase().replace(/ /g, '')}`}
              className="hover:text-white text-yellow-500 font-poppins px-4 py-2 block"
              onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
