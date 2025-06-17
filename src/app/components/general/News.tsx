"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
// import Image from "next/image";
import Button from "@/app/components/ui/button";

import "swiper/css";

const boardMembers = [
  {
    id: 1,
    // name: "МІЛЮТІНА КАТЕРИНА ЛЕОНІДІВНА",
    position: "23 квітня 2025 року — Професійне свято — День психолога!",
    // badge: "Наглядова рада",
    description: `Дорогі колеги та любі здобувачі, шановні психологи! Щиро вітаємо вас із професійним святом — Днем психолога! . Цього дня ми вшановуємо вашу щоденну невидиму, але надзвичайно важливу працю — турботу про душевне здоров’я , підтримку в найскладніші миті життя , здатність чути серцем та бачити те, що приховано від очей. Ви — ті, хто тримає баланс, коли світ хиткий, хто надихає шукати відповіді, коли здається, що їх немає. Бажаємо вам натхнення , гармонії , внутрішньої сили , а також вдячності від тих, кому ви допомагаєте. Хай ваша чуйність і мудрість\n
    https://www.facebook.com/share/p/16ADGVNt2n/`,
  },
  {
    id: 2,
    // name: "АБДРЯХІМОВ РОСТИСЛАВ АДГАНОВИЧ",
    position:
      "15 травня 2025 року —  Європейська психологічна асоціація стала базою для проведення Міжнародної науково-практичної конференції «Ринок праці: пріоритети та стратегії повоєнної європейської інтеграції»",
    // badge: "Наглядова рада",
    description: `Конференція\n
    https://www.facebook.com/share/p/1HkpR21iWd/
`,
  },
  {
    id: 3,
    // name: "БОРЕЦЬ ОЛЕСЯ АНАТОЛІЇВНА",
    position:
      "02 червня 2025 року — Європейська психологічна асоціація стала платформою для практичної підготовки майбутніх фахівців у галузі психології.",
    // badge: "Наглядова рада",
    description: `Громадська організація «Європейська психологічна асоціація» стала платформою для практичної підготовки майбутніх фахівців у галузі психології. У межах практики студенти долучилися до практико-навчального тренінгу: «Розвиток емоційного інтелекту фахівця організації», де мали змогу поглибити знання про емоційну саморегуляцію, розвиток емпатії, асертивної комунікації та стресостійкості в умовах професійного середовища. Відкритий семінар з елементами тренінгової роботи на тему «Фінансова тривожність: як впоратися із страхами сучасності» створив умови для дослідження психологічної природт фінансових страхів, допоміг розпізнавати власні патерни тривожного мислення та надав інструменти для зниження тривожності й підвищення фінансової обізнаності. Переддипломна практика стала потужною платформою для набуття практичного досвіду, розвитку фахових компетентностей і зміцнення професійної мотивації. Щиро дякуємо Громадській організації «Європейська психологічна асоціація» та всім залученим фахівцям за партнерство, наставництво та підтримку майбутніх психологів!\n
    https://www.facebook.com/share/p/16iGzpTxmt/`,
  },
];

export default function News() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<
    null | (typeof boardMembers)[0]
  >(null);

  return (
    <div id="slider2" className=" w-full text-center relative py-10">
      <div className="relative max-w-7xl mx-auto">
        {/* Стрелки (десктоп) */}
        {/* <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}

        {/* Стрелки (мобилка) */}
        <div className="flex justify-center gap-4 sm:hidden mb-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="h-full flex flex-col justify-between p-4 border rounded-xl shadow-md bg-[orange] min-h-[250px]">
                <div className="relative"></div>
                {/* <h3 className="font-bold font-dm text-[20px]">{member.name}</h3> */}
                <p className="font-bold font-inter text-left text-[16px] text-[#09234B]">
                  {member.position}
                </p>

                <div className="mt-[20px] flex justify-center">
                  <Button
                    className="max-w-[150px] px-[20px] py-[5px] font-medium font-inter text-[12px] bg-black text-white rounded-3xl"
                    onClick={() => {
                      console.log("Click!", member);
                      setSelectedMember(member);
                    }}
                  >
                    Читати далі
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модалка */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            {/* <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3> */}
            <p className="text-md font-semibold text-[#09234B] mb-2">
              {selectedMember.position}
            </p>
            <p className="text-sm text-gray-700 whitespace-pre-line text-left">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
