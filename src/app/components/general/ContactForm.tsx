"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    consentInfo: false,
    consentPolicy: false,
  });
  const [status, setStatus] = useState<string | null>(null); // Для статусу відправки

  const isValid = formData.consentInfo && formData.consentPolicy;

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Показуємо статус "відправка..."
    setStatus("Надсилаємо ваше повідомлення...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Для правильного парсингу на сервері
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Повідомлення надіслано!");
        // Очищаємо форму після успішної відправки
        setFormData({
          name: "",
          email: "",
          comment: "",
          consentInfo: false,
          consentPolicy: false,
        });
      } else {
        const result = await response.json();
        setStatus(
          result?.message || "Помилка при надсиланні. Спробуйте ще раз."
        );
      }
    } catch (error) {
      setStatus("Помилка при надсиланні. Спробуйте ще раз.");
    }
  };

  return (
    <section className="py-12">
      <div className="w-[1074px] mx-auto px-4">
        <h2 className="text-[56px] font-medium font-dm text-center mb-8">
          Залишились питання <br />
          чи пропозиції?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-[16px] font-bold font-inter mb-2">
              Як Вас звати?
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введіть Ваше ім'я"
              required
              className="w-full border text-[16px] font-regular font-inter  border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-[16px] font-bold font-inter mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введіть Вашу електронну адресу"
              required
              className="w-full border text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[16px] font-bold font-inter mb-2">
              Коментар
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Текст"
              required
              className="w-full border text-[16px] font-regular font-inter  border-gray-300 rounded px-4 py-2 h-32 resize-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2 text-sm">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consentInfo"
                checked={formData.consentInfo}
                onChange={handleChange}
              />
              Даю згоду на обробку інформації
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consentPolicy"
                checked={formData.consentPolicy}
                onChange={handleChange}
              />
              Погоджуюсь з політикою конфіденційності ЄПА
            </label>
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl ${
                isValid
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              НАДІСЛАТИ
            </button>
          </div>

          {status && (
            <div className="md:col-span-2 text-center mt-4">
              <p className="text-sm font-semibold">{status}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
