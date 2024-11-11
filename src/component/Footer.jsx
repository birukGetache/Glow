import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Section: Logo and Description */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold overflow-y-hidden">Company Logo</h3>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.
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
            <p className="mt-4 text-gray-400">Email: support@company.com</p>
            <p className="mt-2 text-gray-400">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Section: Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Glow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
