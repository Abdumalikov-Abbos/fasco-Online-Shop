import React, { useEffect, useState } from "react";

export default function Purchased() {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("purchasedItems");
    if (items) {
      setPurchasedItems(JSON.parse(items));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          🛍 Sotib olingan mahsulotlar
        </h2>

        {purchasedItems.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            Hozircha hech qanday mahsulot sotib olinmagan.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {purchasedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">ID: {item.id}</p>
                  <p className="text-lg text-black font-bold">${item.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
    