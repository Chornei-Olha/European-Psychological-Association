"use client";

import Image from "next/image";

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
      <section className="bg-[#BFD6EC] mt-[100px] py-12 px-4 rounded-[20px]">
        <div className="flex items-center justify-between mt-[32px] ml-[42px]">
          <h2 className="text-[80px] font-dm font-regular">
            ПСИХОЛОГІЧНИЙ <br /> РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
          </h2>
          <Image src="/assets/stars.png" alt="Logo" width={213} height={213} />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Левая часть */}
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-[20px] font-inter font-regular ml-[42px] mt-[20px]">
              Психологічний реабілітаційний центр обладнаний трьома кабінетами,
              де проводиться консультативна, психотерапевтична, корекційна
              робота з клієнтами.{" "}
            </p>
            <button className="px-[31.5px] py-[6px] bg-black hover:bg-blue-700 text-white font-reem transition w-fit ml-[42px] mt-[50px] mb-[50px]">
              ДОКЛАДНІШЕ
            </button>
            <p className="text-[16px] font-reem font-regular ml-[42px] ">
              Психологічний реабілітаційний центр є структурним підрозділом
              Європейської психологічної асоціації, які розміщений на 7 поверху
              за адресом Україна, м. Київ, вул. Глибочицька, будинок 17
              (літ.1А), офіс 708.
              <br />
              Навчальний корпус – сучасне мультимедійне обладнані аудиторії.
              Аудиторії є лекційним простором, а також місцем для практичної
              роботи з кейсами і презентаціями, пошуку натхнення та ідей.
              <br />
              Психологічний реабілітаційний центр обладнаний трьома кабінетами,
              де проводиться консультативна, психотерапевтична, корекційна
              робота з клієнтами.
            </p>
          </div>

          {/* Правая часть - список */}
          <div className="flex flex-col md:grid-cols-3 gap-4 w-full md:w-1/2 mt-[70px]">
            {items.map(({ id, image, text }) => (
              <div
                key={id}
                className="border-none rounded-[20px] p-4 flex flex-row gap-5 items-center text-center bg-white shadow"
              >
                <Image
                  src={image}
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
