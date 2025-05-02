import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const location = useLocation();
  const { cartProducts, total, wrap } = location.state || {};

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiration: "",
    securityCode: "",
    cardHolder: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const allFieldsFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (!allFieldsFilled) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    // Saqlash
    localStorage.setItem("purchasedItems", JSON.stringify(cartProducts));
    toast.success("To‘lov muvaffaqiyatli amalga oshirildi!");
  };

  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <h2 className="text-center font-[400] text-[42px] text-black leading-[32px] mt-[78px]">
        FASCO Demo Checkout
      </h2>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Contact */}
          <div>
            <div className="flex justify-between">
              <h3 className="text-[32px] md:text-[46px] font-[400] text-[#484848]">Contact</h3>
              <p className="text-[#1456FF] cursor-pointer mt-[27px]">Create Account</p>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#8A8A8A] p-3 rounded-md mt-[26px]"
            />
          </div>

          {/* Delivery */}
          <div>
            <h3 className="text-[46px] font-[400] mb-3 text-[#484848]">Delivery</h3>
            <div className="space-y-3">
              <input type="text" name="country" placeholder="Country / Region" value={formData.country} onChange={handleChange} className="w-full border p-3 rounded-md" />
              <div className="flex gap-3">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full border p-3 rounded-md" />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full border p-3 rounded-md" />
              </div>
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full border p-3 rounded-md" />
              <div className="flex gap-3">
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full border p-3 rounded-md" />
                <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="w-full border p-3 rounded-md" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-[46px] text-[#484848] font-[400] mb-[16px]">Payment</h3>
            <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="w-full border p-3 rounded-md" />
            <div className="flex gap-3 mt-2">
              <input type="text" name="expiration" placeholder="Expiration Date" value={formData.expiration} onChange={handleChange} className="w-full border p-3 rounded-md" />
              <input type="text" name="securityCode" placeholder="Security Code" value={formData.securityCode} onChange={handleChange} className="w-full border p-3 rounded-md" />
            </div>
            <input type="text" name="cardHolder" placeholder="Card Holder Name" value={formData.cardHolder} onChange={handleChange} className="w-full border p-3 rounded-md mt-2" />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ opacity: 0.9 }}
            onClick={handlePayment}
            className="w-full bg-black text-white py-3 px-6 rounded-md transition"
          >
            Pay Now
          </motion.button>
        </motion.div>

        {/* ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border p-6 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {cartProducts?.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img src={item.img} alt={item.title} className="w-[80px] h-[100px] object-cover rounded-md" />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">Color: Red</p>
                  <p className="font-medium text-black">${item.price}.00</p>
                </div>
              </div>
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
