"use client";

import Image from "next/image";
import Link from "next/link";

export default function TypesCabinets() {
  const items = [
    {
      id: 1,
      image: "/assets/Icon.png",
      text: "Кабінет індивідуальних консультацій",
    },
    {
      id: 2,
      image: "/assets/Icon.png",
      text: "Кабінет психологічної діагностики",
    },
    {
      id: 3,
      image: "/assets/Icon.png",
      text: "Кабінет профорієнтації та профвідбору",
    },
  ];

  return (
    <>
      <section className="bg-[#BFD6EC] py-12 px-4 rounded-[20px]">
        <div className="flex items-left justify-between mt-[32px] ml-[20px]">
          <h2 className="text-[40px] sm:text-[80px] font-dm font-regular">
            ПСИХОЛОГІЧНИЙ <br /> РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
          </h2>
          {/* Скрываем орнамент на мобильных устройствах */}
          <div className="hidden sm:block">
            <Image
              src="/assets/stars.png"
              alt="Logo"
              width={213}
              height={213}
            />
          </div>
        </div>
        <div className="container mx-auto flex flex-col sm:flex-row items-start justify-between gap-8">
          {/* Левая часть */}
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="text-[16px] sm:text-[20px] font-inter font-regular ml-[20px]  mt-[20px]">
              Психологічний реабілітаційний центр обладнаний трьома кабінетами,
              де проводиться консультативна, психотерапевтична, корекційна
              робота з клієнтами.
            </p>
            <Link
              href="/reabilitation"
              className="inline-block px-[24px] py-[6px] bg-black hover:bg-blue-700 text-white font-reem transition w-fit ml-[20px] mt-[25px] sm:mt-[50px]"
            >
              ДОКЛАДНІШЕ
            </Link>
          </div>

          {/* Правая часть - список */}
          <div className="flex flex-col  sm:grid-cols-3 gap-4 w-full sm:w-1/2 mt-[50px] sm:mt-[70px]">
            {items.map(({ id, text }) => (
              <div
                key={id}
                className="border-none rounded-[20px] p-4 flex flex-row gap-2 sm:gap-5 items-center text-left bg-white shadow"
              >
                <Image
                  src={"/assets/stub.png"}
                  alt={`Іконка ${id}`}
                  width={56}
                  height={56}
                  className="mb-2"
                />
                <p className="text-black">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
