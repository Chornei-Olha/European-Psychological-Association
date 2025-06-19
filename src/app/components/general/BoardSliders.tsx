"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/ui/button";

import "swiper/css";

const boardMembers = [
  {
    id: 1,
    photo: "/assets/Milutina.jpg",
    name: "МІЛЮТІНА КАТЕРИНА ЛЕОНІДІВНА",
    position: "Голова наглядової ради",
    // badge: "Наглядова рада",
    description: `Доктор психологічних наук, професор\n
Професор кафедри психології Академії праці, соціальних відносин і туризму.\n
Автор понад 200 наукових та науково-методичних праць.\n
Провідний тренер Київського інституту раціонально-інтуїтивної психотерапії «Я».\n
Протягом останніх 10 років проводить та розробляє тренінги особистісного зростання, навчальні тренінги-семінари для психологів, програми для навчання HR-фахівців, викладання, сімейної та індивідуальної психотерапії, навчання.`,
  },
  {
    id: 2,
    photo: "/assets/abdrahimov.jpeg",
    name: "АБДРЯХІМОВ РОСТИСЛАВ АДГАНОВИЧ",
    position: "Член наглядової ради",
    // badge: "Наглядова рада",
    description: `Доктор медичних наук, «Медична психологія»\n
Професор кафедри психології Академії праці, соціальних відносин і туризму\n
Автор понад 60 наукових та науково-методичних праць у журналах, що індексуються наукометричними базами Scopus та Web of Science, співавтор 2 монографій, 3 патентів України на винахід.`,
  },
  {
    id: 3,
    photo: "/assets/Borec.jpg",
    name: "БОРЕЦЬ ОЛЕСЯ АНАТОЛІЇВНА",
    position: "Член наглядової ради",
    // badge: "Наглядова рада",
    description: `Доктор філософії в галузі знань 05 «Соціальні та поведінкові науки» за спеціальністю 053 «Психологія».\n
Доцент кафедри психології Академії праці, соціальних відносин і туризму.\n
Автор понад 20 наукових та науково-методичних праць у журналах, співавтор 2 монографій.\n
Гарант освітньо-професійної програми «Психологія» першого (бакалаврського) рівня за спеціальністю 053 «Психологія»`,
  },
  {
    id: 4,
    photo: "/assets/Goncharenko.jpeg",
    name: "ГОНЧАРЕНКО НАТАЛЯ МИКОЛАЇВНА",
    position: "Член наглядової ради",
    // badge: "Наглядова рада",
    description: `Проректор з міжнародних зв’язків\n
Фахівець з міжнародних питань професійної діяльності психолога\n
Доцент кафедри психології Академії праці, соціальних відносин і туризму.\n
Експерт Міністерства освіти та науки України з питань якості освіти\n
Автор понад 20 наукових та науково-методичних праць у журналах, співавтор 2 монографій`,
  },
];

export default function BoardSliders() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<
    null | (typeof boardMembers)[0]
  >(null);

  return (
    <div id="slider2" className="w-full text-center relative py-12">
      <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium font-dm mb-8">
        Наглядова рада
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Стрелки (десктоп) */}
        <button
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
        </button>

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
            1024: { slidesPerView: 4 },
          }}
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="h-full flex flex-col justify-between p-4 border rounded-xl shadow-md bg-white min-h-[650px] max-h-[650px]">
                <div className="relative mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={160}
                    className="w-full h-96 object-cover rounded-lg"
                    priority
                  />
                  {/* <div className="absolute bottom-2 right-2 bg-[#0103B8] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    {member.badge}
                  </div> */}
                </div>
                <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>
                <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                  {member.position}
                </p>
                <p className="font-regular font-inter text-[16px] mt-[15px] flex-grow line-clamp-3">
                  {member.description}
                </p>
                <div className="mt-[20px] flex justify-center">
                  <Button
                    className="max-w-[180px] px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl cursor-pointer"
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
            <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
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
