import React from 'react'
import Coat from '../../assets/image (4).png';
import Sweater from "../../assets/image (5).png";
import Snickers from '../../assets/image (6).png';
import Shirt from '../../assets/image (7).png';
import Dress from '../../assets/image (8).png';
import Blazer from './../../assets/image (9).png';



export default function Follow() {
    return (
      <div className=' pt-[150px] pb-[150px]'>
              <div className='grid  justify-center'>
                  <h2 className='flex justify-center text-[46px] leading-[100%] text-[#484848] font-[400] pb-6'>Follow Us On Instagram</h2>
                  <p className='flex justify-center pb-16 font-[400] text-[#8A8A8A] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
              </div>
              <div className=' flex items-center justify-center'>
                  <img loading='lazy' src={Coat} alt="" className='hover:scale-95 duration-500'/>
                  <img loading='lazy' src={Sweater} alt="" className='hover:scale-95 duration-500'/>
                  <img loading='lazy' src={Snickers} alt="" className='hover:scale-95 duration-500'/>
                  <img loading='lazy' src={Shirt} alt="" className='hover:scale-95 duration-500'/>
                  <img loading='lazy' src={Dress} alt="" className='hover:scale-95 duration-500'/>
                  {/* <img src={Blazer} alt="" className='hover:scale-95 duration-500'/> */}
              </div>
      </div>
    )
  }