import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Section: Logo and Description */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold overflow-y-hidden flex justify-center">
            <div className="w-[50px] h-[50px] rounded-[25px] bg-white flex justify-center items-center ">
        <img
          src="./logo.png"
          className="w-40 h-35"
          alt="Logo"
        />
      </div>
            </h3>
            <p className="mt-2 text-gray-400 text-center">
            visite Our <a href='/contact' className='text-yellow-500'>contact support</a> 
            </p>
            <p className="mt-2 text-gray-400 text-center">
            for assistance call at 
            </p>
            <p className="mt-2 text-gray-400 text-center">
      <a href="tel:+251912804851" className="flex items-center justify-center">
        <FaPhoneAlt className="mr-2" /> +251912804851
      </a>
  
    </p>
          </div>

          {/* Section: Quick Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Section: Contact Info */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-400">
  Email: <a href="mailto:glowproduction@gmail.com" className="text-blue-500 hover:underline">glowproduction@gmail.com</a>
</p>

            <a href="tel:+251707366777" className="flex items-center justify-center">
        <FaPhoneAlt className="mr-2" /> +251707366777
      </a>
          </div>
        </div>

        {/* Section: Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href=" https://www.facebook.com/profile.php?id=61567919514553&mibextid=ZbWKwL" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="https://t.me/glowult" className="text-gray-400 hover:text-white"><i className="fab fa-telegram"></i> Telegram</a>
            <a href="mailto:temude39@gmail.com" className="text-gray-400 hover:text-white"><i className="fas fa-envelope"></i>            Email</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()}  Glow production. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
