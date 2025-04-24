import React, { useEffect, useState } from 'react';
import BlackDress from "../../assets/image (1).png";
import BlueSkirt from "../../assets/BlueDress.png";
import DarkBluePants from "../../assets/image (3).png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';

export default function Discounts({ duration = 1000 * 60 * 60 * 24 * 5 }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
    const timer = setInterval(() => {
      setTime((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return (
    <div id="deals" className="flex flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center px-4 md:px-8 lg:px-16 xl:px-24 py-10 bg-gray-50 gap-10">
      {/* Left Side */}
      <div className="w-full max-w-[500px]">
        <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-[400] leading-tight text-[#484848] mb-6">
          Deals Of The Month
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#8A8A8A] mb-6 leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>
        <Link to="/shop">
          <Button title="Buy Now" />
        </Link>

        <div className="mt-8">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Hurry, Before It's Too Late!</h3>
          <div className="bg-white rounded-xl flex flex-col items-center p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <TimeBox value={days} label="Days" />
              <TimeBox value={hours} label="Hours" />
              <TimeBox value={minutes} label="Minutes" />
              <TimeBox value={seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Right Side */}
      <div className="w-full max-w-full xl:max-w-[800px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="relative rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <SlideContent imgSrc={BlackDress} discount="-30% OFF" title="Spring Collection" price="Starting @ $20" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent imgSrc={BlueSkirt} discount="-25% OFF" title="Summer Collection" price="Starting @ $25" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent imgSrc={DarkBluePants} discount="-20% OFF" title="New Arrivals" price="Starting @ $30" />
          </SwiperSlide>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev !w-10 !h-10 !bg-white !rounded-full !shadow-md !left-2 after:!text-black after:!text-lg"></div>
          <div className="swiper-button-next !w-10 !h-10 !bg-white !rounded-full !shadow-md !right-2 after:!text-black after:!text-lg"></div>
        </Swiper>
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="shadow-midNight shadow-lg rounded-lg p-4 flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-white">
      <span className="text-3xl md:text-4xl font-bold text-black">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-sm md:text-lg font-medium text-black mt-1 md:mt-2">{label}</span>
    </div>
  );
}

function SlideContent({ imgSrc, discount, title, price }) {
  return (
    <div className="relative">
      <img src={imgSrc} alt={title} className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg" />
      <div className="absolute bottom-6 left-6">
        <span className="bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
          {discount}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-midNight mt-3">{title}</h3>
        <p className="text-midNight text-sm md:text-lg">{price}</p>
      </div>
    </div>
  );
}
