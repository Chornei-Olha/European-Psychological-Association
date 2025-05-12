"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consentInfo: false,
    consentPolicy: false,
  });

  const [status, setStatus] = useState<string | null>(null);

  const isValid = formData.consentInfo && formData.consentPolicy;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  useEffect(() => {
    emailjs.init("achhP-nDveJIR5VOU");
  }, []);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus("Надсилаємо ваше повідомлення...");

  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setStatus("Повідомлення надіслано!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //         consentInfo: false,
  //         consentPolicy: false,
  //       });
  //     } else {
  //       const result = await response.json();
  //       setStatus(
  //         result?.message || "Помилка при надсиланні. Спробуйте ще раз."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Помилка при надсиланні форми:", error);
  //     setStatus("Помилка при надсиланні. Спробуйте ще раз.");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) {
      setStatus("Будь ласка, підтвердіть згоди.");
      return;
    }

    setStatus("Надсилаємо ваше повідомлення...");

    try {
      const result = await emailjs.send(
        "service_cqqge8c",
        "template_1jp9jup",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rvxuQ4n9szGCWTyHr"
      );

      console.log("SUCCESS!", result.status, result.text);
      setStatus("Повідомлення надіслано!");
      setFormData({
        name: "",
        email: "",
        message: "",
        consentInfo: false,
        consentPolicy: false,
      });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("Помилка при надсиланні. Спробуйте ще раз.");
    }
  };

  return (
    <section className="py-12">
      <div className="w-full sm:max-w-[1074px] mx-auto px-4">
        <h2 className="text-[40px] sm:text-[56px] font-medium font-dm text-center mb-8">
          Залишились питання чи пропозиції?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-[14px] sm:text-[16px] font-bold font-inter mb-2">
              Як Вас звати?
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введіть Ваше ім'я"
              required
              className="w-full border text-[14px] sm:text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-[14px] sm:text-[16px] font-bold font-inter mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введіть Вашу електронну адресу"
              required
              className="w-full border text-[14px] sm:text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[14px] sm:text-[16px] font-bold font-inter mb-2">
              Коментар
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Текст"
              required
              className="w-full border text-[14px] sm:text-[16px] font-regular font-inter border-gray-300 rounded px-4 py-2 h-32 resize-none"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-2 text-sm sm:text-[14px]">
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

          <div className="sm:col-span-2 text-right">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-[40px] py-[10px] font-bold font-inter text-[14px] sm:text-[16px] rounded-3xl ${
                isValid
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              НАДІСЛАТИ
            </button>
          </div>

          {status && (
            <div className="sm:col-span-2 text-center mt-4">
              <p className="text-sm font-semibold">{status}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
