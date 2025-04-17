"use client";

import Image from "next/image";

export default function BlueSection() {
  return (
    <section className="pb-[50px] w-full">
      <div className="bg-[#0103B8] mx-[20px] py-12 rounded-[20px]">
        <Image
          src="/assets/Vector2.png"
          alt="Logo"
          width={120}
          height={120}
          className="absolute right-[50px]"
        />
        <div className="max-w-[1241px] mx-auto">
          <div className="flex items-center justify-between mt-[48px]">
            <h2 className="text-[56px] font-inter font-regular text-white">
              Бачення
            </h2>
          </div>

          <div className="flex flex-col">
            <p className="text-[20px] font-inter font-regular text-white mt-[20px]">
              Європейська психологічна асоціація просуває якісні психологічні
              знання та сучасну освіту, крокуючи до інновацій, співпраці та
              відкритості знань.
            </p>

            <p className="text-[20px] font-inter font-regular text-black text-center w-[115px] mt-[80px] border rounded-4xl p-[6px] bg-white">
              Візія
            </p>

            <p className="text-[20px] font-inter font-regular text-white mt-[20px]">
              Професійний світ, в якому ніхто не буде відчувати нестачу
              психологічних знань
            </p>

            <p className="text-[20px] font-inter font-regular text-black text-center w-[115px] mt-[80px] border rounded-4xl p-[6px] bg-white">
              Місія
            </p>

            <p className="text-[20px] font-inter font-regular text-white mt-[20px]">
              Місія Європейської психологічної асоціації полягає в тому, щоб
              значущо вплинути на освіту в Україні, надаючи сучасні психологічні
              та управлінські знання, які змінюють кожного...
              {/* обрезал для краткости, вставь полный текст при необходимости */}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1241px] mx-auto mt-[80px]">
        <p className="text-[20px] font-inter font-regular text-white text-center w-[115px] border rounded-4xl p-[6px] bg-[#0103B8]">
          Мета
        </p>
        <p className="text-[20px] font-inter font-regular text-black mt-[20px]">
          Сприяння реалізації творчого потенціалу особистості фахівця з метою
          вирішення актуальних теоретичних, практичних та наукових проблем...
        </p>
      </div>
    </section>
  );
}
