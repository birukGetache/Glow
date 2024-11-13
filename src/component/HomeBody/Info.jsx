import React from 'react';

const HalfBorder = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pl-5 sm:pl-10 lg:pl-28 pr-5 sm:pr-10 lg:pr-28 box-border pt-2 gap-5' id='info'>
            <div className='bg-black bg-opacity-10 box-border pl-5 rounded-md'>
                <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
                    <div className='flex items-center justify-center h-fit'>
                        <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                    </div>
                    <p className="flex items-center justify-center h-full text-6xl"> 1</p>
                </div>
                <p className="flex justify-center mt-1 pt-2 text-xl text-center sm:text-left">
                    DID YOU KNOW?<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; According to Statista, the global health and personal care products market was estimated to be worth $648.6 billion in 2024. These include ultrasound gel, antifungal cream, personal care products like shampoo, conditioner, toothpaste, and the like. Imagine the disaster if all the production relies on synthetic chemicals.
                </p>
            </div>
            <div className="hidden sm:block">
                <img src='./glow.jfif' className='rounded' alt="Glow image" />
            </div>

            <div className="hidden sm:block">
                <img src='./agri.jfif' className='rounded w-full' alt="Agriculture image" />
            </div>

            <div className='bg-black bg-opacity-10 box-border pl-5 rounded-md'>
                <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
                    <div className='flex items-center justify-center h-fit'>
                        <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                    </div>
                    <p className="flex items-center justify-center h-full text-6xl"> 2</p>
                </div>
                <p className="flex justify-center mt-1 pt-2 text-xl text-center sm:text-left">
                    WHO WE ARE?<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Glow production is a company located in Bahirdar, Ethiopia which strives for a natural and responsible production of these products from locally available abundant herbs. The company holds the issue of sustainability as a crystal foundation of manufacturing.
                </p>
            </div>

            <div className="hidden sm:block">
                <img src='./ultrasonic.jpg' className='rounded' alt="Ultrasonic image" />
            </div>

            <div className='bg-black bg-opacity-10 box-border pl-5 rounded-md'>
                <div className="w-32 h-32 mt-3 mb-2 box-border bg-opacity-10 bg-black relative">
                    <div className='flex items-center justify-center h-fit'>
                        <div className="absolute left-0 top-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute left-0 top-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-1/2 w-[4px] bg-yellow-500 flex items-center justify-center"></div>
                        <div className="absolute right-0 bottom-0 h-[4px] w-1/2 bg-yellow-500 flex items-center justify-center"></div>
                    </div>
                    <p className="flex items-center justify-center h-full text-6xl"> 3</p>
                </div>
                <p className="flex justify-center mt-1 pt-2 text-xl text-center sm:text-left">
                    WHAT WE DO?<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;We produce 96% natural ultrasound gel, 95% organic antifungal cream, and 98% natural fungicide from the herb which is known as "king of herbs"- aloe vera.
                </p>
            </div>
        </div>
    );
};

export default HalfBorder;
