import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header/Header";

export default function Checkout() {
  const location = useLocation();
  const { cartProducts, total, wrap } = location.state || {};

  return (
    <div>
      <Header />
      <h2 className="text-center font-[400] text-[42px] text-black leading-[32px] mt-[78px]">
        FASCO Demo Checkout
      </h2>
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* <h2 className="text-3xl font-bold text-gray-900">FASCO Demo Checkout</h2> */}

          {/* Contact Info */}
          <div>
            <div className="flex gap-x-[140px]">
              <h3 className="text-[46px] leading-[100%] font-[400] mb-3 text-[#484848]">
                Contact
              </h3>
              <p className="font-[400] text-[16px] leading-[100%] mt-[27px]">
                Have an account?{" "}
                <span className="text-[#1456FF] text-[16px] font-[400] leading-[100%]">
                  Create Account
                </span>
              </p>
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border  border-[#8A8A8A] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black mt-[26px]"
            />
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="text-[46px] font-[400] mb-3 text-[#484848]">
              Delivery
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Country / Region"
                className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex gap-x-[12px]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex gap-x-[12px]">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border border-gray-300 p-3 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-[26px]">
              <input
                type="checkbox"
                id="saveInfo"
                class="h-[32px] w-[32px]  border-[#000000] rounded focus:ring-blue-500"
              />
              <label
                for="saveInfo"
                class="text-[16px] font-[400] leading-[42px] text-[#8A8A8A]"
              >
                Save this info for future
              </label>
            </div>
          </div>
          {/* Payment Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Payment</h3>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ opacity: 0.9 }}
            className="w-full bg-black text-white py-3 px-6 rounded-md transition"
          >
            Pay Now
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border p-6 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Order Summary
          </h3>

          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {cartProducts?.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[80px] h-[100px] object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm">Color: Red</p>
                  <p className="text-black font-medium">${item.price}.00</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-gray-700">
            <div className="flex justify-between text-base">
              <span>Gift Wrap</span>
              <span>{wrap ? "$10.00" : "$0.00"}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-300">
              <span>Total</span>
              <span>${total}.00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
