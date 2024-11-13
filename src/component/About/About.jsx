import React from 'react';
import NavBar from '../NavBar';



const About = () => {
  return (
    <>
    <NavBar></NavBar>
    <section className="bg-gray-100 py-12 ">
     
         <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
         <div className='grid grid-cols-2 p-28'>
         <div>
         <div className="w-auto h-auto mt-3 mb-2 box-border  relative">
            <div className='flex items-center justify-center h-fit'>
            <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            </div>
            <img src='./Ethiopia.jpg' className='p-10 h-96 w-auto'></img>
        </div>
     
      </div>
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-600 mb-12">
        Founded in 2024, Glow Startup Company is an innovative company specializing in high-quality healthcare and personal care products, including ultrasound gel, antifungal creams, personal care products like Conditioner and shampoos. We are committed to delivering effective, safe, and eco-friendly solutions for both medical professionals and consumers.
        </p>
      </div>
    
      </div>
    </section>
    </>
  );
};

export default About;
