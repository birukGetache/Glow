import React from 'react';

function NavBar() {
  return (
    <nav className="pl-28 pr-28 flex items-center justify-between  bg-opacity-10 bg-black w-screen  overflow-x-hidden z-11 top-0 left-0 text-white h-[10vh] box-border">
      <div className="text-xl font-bold  text-yellow-500 font-poppin">MyWebsite</div>
      <ul className="flex space-x-6">
        <li className='cursor-pointer'>
          <a href="/" className="hover:text-white text-yellow-500 font-poppins ">Home</a>
        </li>
        <li className='cursor-pointer'>
          <a href="/about" className="hover:text-white text-yellow-500 font-poppins">About</a>
        </li>
        <li className='cursor-pointer'>
          <a href="/services" className="hover:text-white text-yellow-500 font-poppins"> Products and services </a>
        </li>
        <li className='cursor-pointer'>
          <a href="/shop" className="hover:text-white text-yellow-500 font-poppins">Shop</a>
        </li>
        <li className='cursor-pointer'>
          <a href="/gallery" className="hover:text-white text-yellow-500 font-poppins">Gallery</a>
        </li>
        <li className="cursor-pointer z-10">
          <a href="/contact" className="hover:text-white text-yellow-500 font-poppins">Contact us</a>
        </li>
    
      </ul>
    </nav>
  );
}

export default NavBar;
