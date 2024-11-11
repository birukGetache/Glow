import React from 'react';

const HalfBorder = () => {
    return (
        <div className='grid grid-cols-2 pl-28 pr-28 box-border pt-2 gap-5' id='info'>
        <div className=' bg-black bg-opacity-10 box-border pl-5  rounded-md ' >
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
      Did you know? According to united nations development programme (UNDP) Eventhough 85% of the Ethiopian economy relies on agriculture, 68.7 percent of the population in the country is multidimensionally poor.
        </p>
        </div>
        <div>
         <img src='./724114.jpg' className='rounded'></img>
        </div>



        <div>
         <img src='./agri.jfif' className='rounded w-full'></img>
        </div>
        <div className=' bg-black bg-opacity-10 box-border pl-5  rounded-md'>
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
        Who we are?

Vera fungicide strives for developing a natural fungicide to boost crop yields and guarantee food security.
        </p>
        </div>


        <div className=' bg-black bg-opacity-10 box-border pl-5  rounded-md ' >
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
        Ethiopia has significant potential in agriculture due to its favorable climate, diverse geography, and vast arable land. Agriculture is the backbone of Ethiopia’s economy, employing the majority of the population and contributing substantially to its GDP. 
        </p>
        </div>
        <div>
         <img src='./Ethiopia.jpg' className='rounded'></img>
        </div>



        </div>
    );
};

export default HalfBorder;
