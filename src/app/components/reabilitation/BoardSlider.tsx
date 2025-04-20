"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const boardMembers = [
  {
    id: 1,
    photo: "/images/member1.jpg",
    name: "ПРІБ ГЛІБ АНАТОЛІЙОВИЧ",
    position: "Президент",
    description:
      "Доктор медичних наук, професор. Проректор з наукової роботи Академії праці, соціальних відносин і туризму...",
  },
  {
    id: 2,
    photo: "/images/member2.jpg",
    name: "ЕГЕЗА ЛЮДМИЛА ЄВГЕНІВНА",
    position: "Віце-президент",
    description:
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці...",
  },
  {
    id: 3,
    photo: "/images/member3.jpg",
    name: "БОНДАР СВІТЛАНА СЕРГІЇВНА",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки». Доцент кафедри психології...",
  },
];

export default function BoardSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null); // получить доступ к самому Swiper экземпляру

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium font-dm mb-8 text-center">
        Фахівці
      </h2>

      {/* Стрелки */}
      <button
        ref={prevRef}
        className="absolute left-2 sm:-left-10 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 sm:-right-10 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {boardMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="h-full flex flex-col p-4 border rounded-xl shadow-md bg-white min-h-[580px]">
              <Image
                src={member.photo}
                alt={member.name}
                width={300}
                height={160}
                className="w-full h-60 object-cover rounded-lg mb-2"
                priority
              />
              <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>
              <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                {member.position}
              </p>
              <p className="font-regular font-inter text-[16px] mt-[15px] flex-grow">
                {member.description}
              </p>
              <div className="mt-[20px] flex justify-center">
                <Button className="max-w-[180px] px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl">
                  Читати далі
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
