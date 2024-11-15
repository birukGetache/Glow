import React from 'react';

const HalfBorder = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 lg:px-28 box-border pt-2 gap-5' id='info'>
        <div className=' bg-black bg-opacity-10 box-border pl-5  rounded-md order-2 md:order-1' >
        <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
            <div className='flex items-center justify-center h-fit'>
            <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            </div>
            <p className="flex items-center justify-center h-full text-6xl"> 1</p>
        </div>
        <p className="flex  justify-center  mt-1 pt-2 text-xl">
    
DID YOU KNOW?<br></br>

&nbsp;&nbsp;&nbsp;&nbsp; According to Statista, the global health and personal care products market was estimated to be worth $648.6 billion in 2024. These include ultrasound gel, antifungal cream, personal care products like shampoo, conditioner, tooth paste,  and the like. Imagine the disaster if all the production relies on synthetic chemicals.
        </p>
        </div>
        <div class="order-1 md:order-2 rounded flex bg-cover overflow-hidden">
  <img src="./glow.jfif" alt="Glow Image" class="w-1/2 object-cover" />
  <img src="./creameside.png" alt="Cream Side Image" class="w-1/2 object-cover" />
</div>




        <div className='order-3 md:order-3 '>
         <img src='./photo_2024-11-15_18-54-57.jpg' className='rounded w-full '></img>
        </div>
        <div className=' bg-black bg-opacity-10 box-border pl-5 rounded-md order-4 md:order-4'>
        <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
            <div className='flex items-center justify-center h-fit'>
            <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            </div>
            <p className="flex items-center justify-center h-full text-6xl"> 2</p>
        </div>
        <p className="flex  justify-center  mt-1 pt-2 text-xl">
        WHO WE ARE?<br></br>

        &nbsp;&nbsp;&nbsp;&nbsp;Glow production is a company located in Bahirdar, Ethiopia which strives for a natural and responsible production of these products from locally available abundant herbs. The company holds the issue of sustainability as a crystal foundation of manufacturing.
        </p>
        </div>


        <div className=' bg-black bg-opacity-10 box-border pl-5  rounded-md order-6 md:order-5' >
        <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
            <div className='flex items-center justify-center h-fit'>
            <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
            <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
            </div>
            <p className="flex items-center justify-center h-full text-6xl"> 3</p>
        </div>
        <p className="flex  justify-center  mt-1 pt-2 text-xl">
        WHAT WE DO?<br></br>

        &nbsp;&nbsp;&nbsp;&nbsp;We produce 96% natural ultrasound gel, 95% organic antifungal cream, and 98% natural fungicide from a the herb which is known as "king of herbs"- aloe vera.
        </p>
        </div>
        <div class="order-5 md:order-6" >
         <img src='./ultrasonic.jpg' className='rounded'></img>
        </div>



        </div>
    );
};

export default HalfBorder;
