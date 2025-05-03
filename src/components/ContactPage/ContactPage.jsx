import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_xd8ao4g",
        "template_1tzjy5q",
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
          to_name: "Abbos",
          to_email: "abdumalikovabbos20@gmail.com",
        },
        "z_b_tihBptSTl5O0Y",
      );

      if (result.text === "OK") {
        alert("✅ Xabaringiz yuborildi!");
        setFormData({ name: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert(`❌ Xatolik: ${error.text}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl p-10 rounded-3xl bg-white/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Связаться с нами
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Пожалуйста, заполните форму ниже, и мы ответим вам как можно скорее.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              className="w-full px-4 py-3 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ваш номер телефона"
              className="w-full px-4 py-3 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Сообщение
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваше сообщение..."
              className="w-full px-4 py-3 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-400 min-h-[120px]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-red bg-black font-semibold py-3 rounded-xl hover:bg-orange-600 transition duration-200"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
