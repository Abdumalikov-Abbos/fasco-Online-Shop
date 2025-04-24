import React from 'react'
import Coat from '../../assets/image (4).png';
import Sweater from "../../assets/image (5).png";
import Snickers from '../../assets/image (6).png';
import Shirt from '../../assets/image (7).png';
import Dress from '../../assets/image (8).png';
import Blazer from './../../assets/image (9).png';

 function Follow() {
  return (
    <div className='pt-[150px] pb-[150px]'>
      <div className='grid justify-center px-4 text-center'>
        <h2 className='flex justify-center text-[46px] leading-[100%] text-[#484848] font-[400] pb-6'>
          Follow Us On Instagram
        </h2>
        <p className='flex justify-center pb-16 font-[400] text-[#8A8A8A] text-[16px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br className='hidden md:block' />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </p>
      </div>
      <div className='flex flex-wrap gap-4 justify-center items-center px-4'>
        <img loading='lazy' src={Coat} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto' />
        <img loading='lazy' src={Sweater} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto' />
        <img loading='lazy' src={Snickers} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto' />
        <img loading='lazy' src={Shirt} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto' />
        <img loading='lazy' src={Dress} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto' />
        {/* <img src={Blazer} alt="" className='hover:scale-95 duration-500 w-[100px] sm:w-auto'/> */}
      </div>
    </div>
  )
}
export default Follow