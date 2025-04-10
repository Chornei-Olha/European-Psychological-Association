"use client";

import Image from "next/image";

export default function EducationSection() {
  return (
    <div className="w-full bg-[#BFD6EC]">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-[#09234B]">
          {/* Грид: 2 строки, 2 колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
            {/* Верхний ряд, первая колонка */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <span className="absolute top-4 right-4 bg-white/70 text-[#09234B] text-sm font-medium px-4 py-1 rounded-full">
                  1 місяць
                </span>
                <Image
                  src="/images/edu1.jpg"
                  alt="Картинка 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white text-base font-medium">
                  Інтенсив» – відповідь на виклики життя{" "}
                </span>
              </div>
              <div className="flex gap-4 mt-4">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Дозволяє поєднати працю та навчання. Передбачає отримання
                  базового обсягу компетенцій та навичок у стислий термін.{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <p className="text-[16px] font-bold font-inter text-center">
                    120 годин{" "}
                  </p>
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    4 кредити ECTS
                  </button>
                </div>
              </div>
            </div>

            {/* Верхний ряд, вторая колонка */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <span className="absolute top-4 right-4 bg-white/70 text-[#09234B] text-sm font-medium px-4 py-1 rounded-full">
                  3 місяці
                </span>
                <Image
                  src="/images/edu2.jpg"
                  alt="Картинка 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white text-base font-medium">
                  Активна особистість» – цікаве та прогресивне сьогодення{" "}
                </span>
              </div>
              <div className="flex gap-4 mt-4">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Спрямована на фахівців, які впроваджують у роботу отримані
                  знання за принципом «тут та зараз».{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <p className="text-[16px] font-bold font-inter text-center">
                    240 годин{" "}
                  </p>
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    8 кредитів ECTS{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Нижний ряд, первая колонка */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <span className="absolute top-4 right-4 bg-white/70 text-[#09234B] text-sm font-medium px-4 py-1 rounded-full">
                  10 місяців
                </span>
                <Image
                  src="/images/edu3.jpg"
                  alt="Картинка 3"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white text-base font-medium">
                  Сталий професійний розвиток» – впевнене майбутнє{" "}
                </span>
              </div>
              <div className="flex gap-4 mt-4">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Уможливлює досягнення нового рівня у діяльності або
                  започаткування кар'єри «з нуля».{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <p className="text-[16px] font-bold font-inter text-center">
                    360 годин{" "}
                  </p>
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    12 кредитів ECTS{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Нижний ряд, вторая колонка – добавляем новый контент */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                {/* Заголовок */}
                <h3 className="text-2xl font-bold text-left">
                  Структура програм
                </h3>
                {/* Текст */}
                <p className="text-base font-medium text-left">
                  Забезпечує довготривале зростання та сталі практики створення
                  цінностей у Вашій діяльності, що залучатиме та приваблюватиме
                  до Вас людей.
                </p>
                {/* Кнопка с стрелкой */}
                <button className="bg-black text-white py-2 px-6 rounded-full mt-4 flex items-center justify-center">
                  Реєстрація
                  <span className="ml-2">→</span>
                </button>
              </div>

              {/* Три блока с текстом */}
              <div className="flex gap-4">
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[16px] text-center font-regular font-inter text-[#3665B0]">
                  ТРЕНІНГОВІ ПРОГРАМИ{" "}
                </div>
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[16px] text-center font-regular font-inter text-[#3665B0]">
                  СЕМІНАРИ{" "}
                </div>
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[16px] text-center font-regular font-inter text-[#3665B0]">
                  ВІДЕО КОНТЕНТ{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
