import React from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const { cartProducts, total, wrap } = location.state || {};

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT SIDE - FORM */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Checkout</h2>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
        </div>

        {/* Delivery Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Delivery</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
        </div>

        {/* Payment Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Payment</h3>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
        </div>

        <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:opacity-80 transition">
          Pay Now
        </button>
      </div>

      {/* RIGHT SIDE - PRODUCT SUMMARY */}
      <div className="border p-6 rounded-lg shadow-lg bg-gray-50">
        <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

        {cartProducts?.map((item) => (
          <div key={item.id} className="flex gap-4 mb-4 items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-[80px] h-[100px] object-cover rounded-md"
            />
            <div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm">Color: Red</p>
              <p className="text-black font-medium">${item.price}.00</p>
            </div>
          </div>
        ))}

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-lg">
            <span>Gift Wrap</span>
            <span>{wrap ? "$10.00" : "$0.00"}</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-2 border-t">
            <span>Total</span>
            <span>${total}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
