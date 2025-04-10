"use client";

import { useState } from "react";
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
];

export default function BoardSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % boardMembers.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + boardMembers.length) % boardMembers.length);
  };

  return (
    <div className="w-full text-center">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-[56px] font-medium font-dm mb-4">Правління ЄПА</h2>
        <div className="relative w-full flex items-center">
          <Button className="absolute left-0" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </Button>
          <div className="pt-[50px] w-full overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-300"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {boardMembers.map((member) => (
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
          </div>
          <Button className="absolute right-0" onClick={nextSlide}>
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
