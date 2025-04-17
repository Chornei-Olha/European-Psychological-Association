"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0103B8] flex justify-center w-full">
      <Image
        src="/assets/vectorR.png"
        alt="Right Logo"
        width={106}
        height={218}
        className="absolute top-[20px] transform pointer-events-none right-0 w-[70px] h-[140px] md:w-[106px] md:h-[218px]"
      />

      <div className="container">
        <div
          className="bg-cover bg-center text-white flex flex-col items-left justify-center h-[749px] w-full"
          style={{ backgroundImage: "url('/assets/map.png')" }}
        >
          <h1 className="text-[40px] sm:text-[68px] leading-tight font-bold mb-8 font-prosto text-center sm:text-left">
            ЄВРОПЕЙСЬКА
            <br />
            ПСИХОЛОГІЧНА АСОЦІАЦІЯ
          </h1>
          <p className="text-[14px] sm:text-[18px] text-left max-w-l font-inter mb-[120px]  px-4 sm:px-0">
            На сьогоднішній день відомо, що найбільша потреба суспільства – це
            якісні послуги та освіта, <br /> пов’язана з надбанням знань та
            навиків психологічного консультуванням у різних сферах.
          </p>
        </div>
      </div>

      {/* Білий фон на всю ширину + container навігації всередині */}
      <nav className="absolute bottom-[100px] sm:bottom-[130px] w-full bg-white h-[150px] md:h-[99px] shadow-md">
        <div className="h-full flex justify-center items-center gap-4 sm:gap-8 text-[14px] sm:text-[18px] font-dm flex-wrap">
          <Link
            href="/about"
            className="text-black font-semibold hover:underline"
          >
            ПРО НАС
          </Link>
          <Link
            href="#board"
            className="text-black font-semibold hover:underline"
          >
            УПРАВЛІННЯ
          </Link>
          <Link
            href="/questions"
            className="text-black font-semibold hover:underline"
          >
            ЧЛЕНСТВО
          </Link>
          <Link
            href="/education"
            className="text-black font-semibold hover:underline"
          >
            ОСВІТА
          </Link>
          <Link
            href="/reabilitation"
            className="text-black font-semibold hover:underline text-center"
          >
            ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
          </Link>
          <Link
            href="/code"
            className="text-black font-semibold hover:underline"
          >
            ЕТИЧНИЙ КОДЕКС
          </Link>

          {/* Скрытие и перемещение ссылки "ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО" на мобильных */}
          <Link
            href="/legislation"
            className="text-black font-semibold hover:underline text-center sm:order-1 order-10"
          >
            ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО
          </Link>
        </div>
      </nav>
    </section>
  );
}
