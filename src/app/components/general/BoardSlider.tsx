"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Тип для члена правління
interface BoardMember {
  id: number;
  photo: string;
  name: string;
  position: string;
  description: string;
}

const boardMembers: BoardMember[] = [
  {
    id: 1,
    photo: "/assets/stub.png",
    name: "ПРІБ ГЛІБ АНАТОЛІЙОВИЧ",
    position: "Президент",
    description:
      "Доктор медичних наук, професор. Проректор з наукової роботи Академії праці, соціальних відносин і туризму...",
  },
  {
    id: 2,
    photo: "/assets/stub.png",
    name: "ЕГЕЗА ЛЮДМИЛА ЄВГЕНІВНА",
    position: "Віце-президент",
    description:
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці, соціальних відносин і туризму. Автор понад 100 наукових та ...",
  },
  {
    id: 3,
    photo: "/assets/stub.png",
    name: "БОНДАР СВІТЛАНА СЕРГІЇВНА",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки» за спеціальністю 053 «Психологія». Доцент кафедри психології Академії праці...",
  },
  {
    id: 4,
    photo: "/assets/stub.png",
    name: "ПРІБ",
    position: "Президент",
    description:
      "Доктор медичних наук, професор. Проректор з наукової роботи Академії праці, соціальних відносин і туризму...",
  },
  {
    id: 5,
    photo: "/assets/stub.png",
    name: "ЕГЕЗА",
    position: "Віце-президент",
    description:
      "Доктор психологічних наук, професор. Завідувач кафедри психології Академії праці, соціальних відносин і туризму. Автор понад 100 наукових та ...",
  },
  {
    id: 6,
    photo: "/assets/stub.png",
    name: "БОНДАР",
    position: "Член правління",
    description:
      "Доктор філософії у галузі знань 05 «Соціальні та поведінкові науки» за спеціальністю 053 «Психологія». Доцент кафедри психології Академії праці...",
  },
];

// Розбивка по 3
const chunkArray = (array: BoardMember[], size: number): BoardMember[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export default function BoardSlider() {
  const [page, setPage] = useState(0);
  const slides = chunkArray(boardMembers, 3);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="board" className="w-full text-center relative py-12">
      <h2 className="text-[56px] font-medium font-dm mb-4">Правління ЄПА</h2>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Стрілка вліво */}
        <Button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 ml-4"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </Button>

        <div className="flex justify-center pt-[50px] transition-all duration-300 gap-1">
          {slides[page].map((member) => (
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
                <div className="absolute bottom-2 right-2 bg-[#0103B8] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                  Управління
                </div>
              </div>
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
          ))}
        </div>

        {/* Стрілка вправо */}
        <Button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 mr-4"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
