import React from "react";
import left from "../../assets/image 2.png";
import right from "../../assets/image 3.png";

const Subscribe = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-fasco-container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <img
              src={left}
              alt="Left model"
              className="w-full max-w-[250px] h-auto object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="w-full md:w-2/4 text-center">
            <h2 className="text-[36px] md:text-[46px] leading-[110%] text-[#484848] font-[400]">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-[#8A8A8A] text-[16px] leading-[26px] font-[400] max-w-xl mx-auto mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
              sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
            </p>

            {/* Input */}
            <div className="mt-[30px] flex justify-center">
              <input
                type="email"
                placeholder="michael@ymail.com"
                className="px-5 py-3 w-full sm:w-[550px] sm:h-[60px] rounded-md border border-gray-300 shadow-xs sm:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black hover:border-black hover:shadow-md"
              />
            </div>

            {/* Button */}
            <div className="mt-[30px] text-center">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <img
              src={right}
              alt="Right model"
              className="w-full max-w-[250px] h-auto object-contain"
            />
          </div>
        </div>
        <footer className="flex justify-between ms-[60px] mt-[30px]">
          <div className="fasco-h1 font-[400] text-[32px] leading-[100%] text-[#484848]">
             FASCO
          </div>
          <div>
            <ul className="flex gap-x-[38px]">
              <li>Support Center</li>
              <li>Invoicing</li>
              <li>Contract</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQ,s</li>
            </ul>
          </div>
        </footer>
        <p className="text-center mt-[50px]">Copyright © 2022 Xpro . All Rights Reseved.</p>
      </div>
    </div>
  );
};

export default Subscribe;
