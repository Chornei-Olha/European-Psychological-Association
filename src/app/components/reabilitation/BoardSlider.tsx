"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
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
  {
    id: 4,
    photo: "/images/member2.jpg",
    name: "ЕГЕЗА ЛЮДМИЛА ЄВГЕНІВНА",
    position: "Віце-президент",
    description:
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці...",
  },
  {
    id: 5,
    photo: "/images/member3.jpg",
    name: "БОНДАР СВІТЛАНА СЕРГІЇВНА",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки». Доцент кафедри психології...",
  },
];

export default function BoardSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full text-center relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium font-dm mb-8">
        Фахівці
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Стрелки (десктоп) */}
        <div className="hidden sm:block">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-20">
            <button ref={prevRef}>
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-20">
            <button ref={nextRef}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Стрелки (мобилка) */}
        <div className="flex justify-center gap-4 sm:hidden mb-4">
          <button ref={prevRef}>
            <ChevronLeft size={20} />
          </button>
          <button ref={nextRef}>
            <ChevronRight size={20} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            // @ts-expect-error: Refs are null on first render, assigned later
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error: Refs are null on first render, assigned later
            swiper.params.navigation.nextEl = nextRef.current;
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
    </div>
  );
}
