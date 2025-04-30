import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Stars from "../../Ui/Star";

const testimonials = [
  {
    id: 1,
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
    image: "../../assets/image (10).png",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis",
    rating: 4,
    image: "../../assets/image (10).png",
  },
  {
    id: 3,
    name: "Michael T.",
    role: "Developer",
    text: "The service was exceptional. I will definitely be using this product again in the future.",
    rating: 5,
    image: "../../assets/image (10).png",
  },
  {
    id: 4,
    name: "Emily W.",
    role: "Marketer",
    text: "Incredible experience from start to finish. The team went above and beyond.",
    rating: 5,
    image: "../../assets/image (10).png",
  },
  {
    id: 5,
    name: "David L.",
    role: "Entrepreneur",
    text: "This product has transformed how I do business. Worth every penny!",
    rating: 4,
    image: "../../assets/image (10).png",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-[#FAFAFA] pb-[58px]">
      <div className="max-w-fasco-container mx-auto px-4 py-16  relative">
        <h2 className="text-[46px] font-[400] leading-[100%] text-[#484848] text-center pt-[150px]">
          This Is What Our Customers Say
        </h2>
        <p className="font-[400] text-[16px] leading-[26px] text-[#8A8A8A] text-center mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>

        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          className="mt-[70px]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!w-[80%] md:!w-[60%] lg:!w-[40%] mb-[10px]"
            >
              <div className="bg-white w-[650px]   h-[300px] p-8 rounded-lg shadow-md text-center transition-all duration-300 swiper-slide-content flex items-center justify-between space-x-6">
                <div className="w-2/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-[#484848] font-[400] text-[16px] leading-[160%]">
                    "{testimonial.text}"
                  </p>
                  <Stars rating={testimonial.rating} className="mt-[27px]" />
                  <div className="border border-[#484848] w-[230px] h-[1px] mt-[30px]"></div>
                  <p className="font-[400] text-[32px] text-[#484848] leading-[100%] mt-[15px]">
                    {testimonial.name}
                  </p>
                  <p className="text-[16px] font-[400] text-[#484848] mt-[13px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-[60px] space-x-6">
          <button className="testimonial-prev bg-white p-3 rounded-full shadow hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button className="testimonial-next bg-white p-3 rounded-full shadow hover:bg-gray-100 transition-colors">
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        <style jsx global>{`
          .swiper-slide {
            transition: all 300ms ease;
            z-index: 10;
            opacity: 0.6;
            transform: scale(0.9);
          }
          .swiper-slide-active {
            z-index: 20 !important;
            opacity: 1 !important;
            transform: scale(1) !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.8;
            transform: scale(0.95);
          }
        `}</style>
      </div>
    </div>
  );
}
