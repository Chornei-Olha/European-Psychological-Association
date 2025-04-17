"use client";

import Image from "next/image";

export default function EducationSection() {
  return (
    <div className="w-full bg-[#BFD6EC]">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-[#09234B]">
          <div className="text-base sm:text-[26px] text-black mb-8 font-inter font-600 text-left space-y-4">
            <p>
              Розроблені щоб допомогти Вам отримати правильні дорожні карти й
              інструменти для створення успішної кар’єри.
            </p>
            <p>
              Заняття допоможуть Вам зосередитися на довготривалому зростанні та
              створені сталих практик у Вашій діяльності.
            </p>
            <p>
              Якщо Ви шукаєте якісне джерело знань та бажаєте створити цінність,
              яка буде залучати потрібних Вам людей – сертифікаційні програми це
              навчання, яке пропонує Вам першокласну освіту та затребувані
              навички та практичні чек-листи, які Ви можете почати
              використовувати одразу.
            </p>
          </div>

          <h2 className="text-3xl sm:text-[56px] text-black mb-8 mt-8 sm:mt-[87px] font-dm font-medium text-center">
            Освітні програми
          </h2>
          {/* Грид: 2 строки, 2 колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 max-w-[1241px]">
            {/* Верхний ряд, первая колонка */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text1.png"
                  alt="Картинка 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-4 mt-4 flex-col sm:flex-row">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Дозволяє поєднати працю та навчання. Передбачає отримання
                  базового обсягу компетенцій та навичок у стислий термін.{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
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
                <Image
                  src="/assets/Text2.png"
                  alt="Картинка 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-4 mt-4 flex-col sm:flex-row">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Спрямована на фахівців, які впроваджують у роботу отримані
                  знання за принципом «тут та зараз».{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
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
                <Image
                  src="/assets/Text3.png"
                  alt="Картинка 3"
                  width={600}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="flex gap-4 mt-4 flex-col sm:flex-row">
                {/* Первый блок */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-regular font-inter text-[#09234B]">
                  Уможливлює досягнення нового рівня у діяльності або
                  започаткування кар&apos;єри «з нуля».{" "}
                </div>

                {/* Второй блок - жирный текст по центру и кнопка */}
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-1/2 text-[16px] font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <p className="text-[16px] font-bold font-inter text-center">
                    360 годин{" "}
                  </p>
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    12 кредитів ECTS{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Нижний ряд, вторая колонка */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4 mt-[50px]">
                {/* Заголовок */}
                <h3 className="text-2xl font-bold text-left sm:text-center sm:text-xl">
                  Структура програм
                </h3>
                {/* Текст */}
                <p className="text-base font-medium text-left sm:text-center sm:text-sm">
                  Забезпечує довготривале зростання та сталі практики створення
                  цінностей у Вашій діяльності, що залучатиме та приваблюватиме
                  до Вас людей.
                </p>
                {/* Кнопка с стрелкой */}
                <button className="bg-black text-white py-2 px-6 rounded-full mt-[50px] flex items-center justify-center">
                  Реєстрація
                  <span className="ml-2">→</span>
                </button>
              </div>

              {/* Три блока с текстом */}
              <div className="flex gap-4 mt-4 flex-wrap">
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[15px] text-center font-regular font-inter text-[#3665B0]">
                  ТРЕНІНГОВІ ПРОГРАМИ{" "}
                </div>
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[15px] text-center font-regular font-inter text-[#3665B0]">
                  СЕМІНАРИ{" "}
                </div>
                <div className="bg-[rgba(57,115,225,0.1)] rounded-4xl py-[20px] flex-1 text-[15px] text-center font-regular font-inter text-[#3665B0]">
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
