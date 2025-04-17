"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці, соціальних відносин і туризму. Автор понад 100 наукових та ...",
  },
  {
    id: 3,
    photo: "/images/member3.jpg",
    name: "БОНДАР СВІТЛАНА СЕРГІЇВНА",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки» за спеціальністю 053 «Психологія». Доцент кафедри психології Академії праці...",
  },
  {
    id: 4,
    photo: "/images/member2.jpg",
    name: "ЕГЕЗА ЛЮДМИЛА ЄВГЕНІВНА",
    position: "Віце-президент",
    description:
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці, соціальних відносин і туризму. Автор понад 100 наукових та ...",
  },
  {
    id: 5,
    photo: "/images/member3.jpg",
    name: "БОНДАР СВІТЛАНА СЕРГІЇВНА",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки» за спеціальністю 053 «Психологія». Доцент кафедри психології Академії праці...",
  },
];

const itemsPerSlide = 3;
const totalSlides = Math.ceil(boardMembers.length / itemsPerSlide);

export default function BoardSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Автоскрол кожні 5 секунд
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Свайп на мобільних
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) nextSlide();
      else if (diff < -50) prevSlide();
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const visibleMembers = boardMembers.slice(
    slideIndex * itemsPerSlide,
    slideIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div
      className="w-full text-center relative py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={sliderRef}
    >
      <div className="relative mx-auto max-w-7xl z-10">
        <h2 className="text-[56px] font-medium font-dm mb-4">Фахівці</h2>

        <div className="relative mx-auto max-w-7xl z-10">
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 ml-4"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </Button>

          {/* <div className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ease-in-out">
              {visibleMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-4 border rounded-xl shadow-md bg-white"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg mb-2"
                    priority
                  />
                  <h3 className="font-bold font-dm text-[20px]">
                    {member.name}
                  </h3>
                  <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                    {member.position}
                  </p>
                  <p className="font-regular font-inter text-[16px] mt-[15px]">
                    {member.description}
                  </p>
                  <Button className="mt-[20px] px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl">
                    Читати далі
                  </Button>
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex justify-center pt-[50px] transition-all duration-300 mw-100% gap-1">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="p-4 border rounded-xl shadow-md bg-white max-w-sm flex flex-col"
              >
                <div className="relative mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={160}
                    className="w-full h-60 object-cover rounded-lg"
                    priority
                  />
                </div>
                <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>
                <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                  {member.position}
                </p>
                <p className="font-regular font-inter text-[16px] mt-[15px] flex-grow ">
                  {member.description}
                </p>
                <div className="mt-[20px] flex justify-center">
                  <Button className="max-w-[180px] px-[40px] py-[10px] font-bold font-inter text-[16px] bg-black text-white rounded-3xl">
                    Читати далі
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 mr-4"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        {/* Лічильник слайдів */}
        <div className="mt-4 text-white text-[16px] font-inter">
          Сторінка {slideIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}
