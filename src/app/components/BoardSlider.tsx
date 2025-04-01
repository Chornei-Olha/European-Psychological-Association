"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const boardMembers = [
  {
    id: 1,
    photo: "/images/member1.jpg",
    name: "Ім'я Прізвище",
    position: "Посада",
    description: "Короткий опис діяльності",
  },
  {
    id: 2,
    photo: "/images/member2.jpg",
    name: "Ім'я Прізвище",
    position: "Посада",
    description: "Короткий опис діяльності",
  },
  {
    id: 3,
    photo: "/images/member3.jpg",
    name: "Ім'я Прізвище",
    position: "Посада",
    description: "Короткий опис діяльності",
  },
  {
    id: 4,
    photo: "/images/member4.jpg",
    name: "Ім'я Прізвище",
    position: "Посада",
    description: "Короткий опис діяльності",
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
    <div className="w-full text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Правління ЄПА</h2>
      <div className="relative w-full flex items-center">
        <Button className="absolute left-0" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </Button>
        <div className="w-full overflow-hidden">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                  priority
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-sm mt-2">{member.description}</p>
                <Button className="mt-3 bg-black text-white">Детальніше</Button>
              </div>
            ))}
          </div>
        </div>
        <Button className="absolute right-0" onClick={nextSlide}>
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
