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
        className="absolute top-[20px] transform pointer-events-none right-0 w-[70px] h-[140px] md:w-[106px] md:h-[218px] z-10"
      />

      <div className="container relative">
        <div
          className="bg-cover bg-center text-white flex flex-col items-left justify-center h-[749px] w-full"
          style={{ backgroundImage: "url('/assets/map.png')" }}
        >
          <Image
            src="/assets/logoT.svg"
            alt="Right Logo"
            width={106}
            height={218}
            className="absolute transform pointer-events-none top-[20px] w-[70px] h-[auto] md:w-[200px] md:h-[auto]"
          />
          <h1 className="text-[33px] sm:text-[68px] leading-tight font-bold mb-25 sm:mb-8 font-prosto text-left px-4 sm:px-0">
            ЄВРОПЕЙСЬКА
            <br />
            ПСИХОЛОГІЧНА АСОЦІАЦІЯ
          </h1>
          <p className="text-[14px] sm:text-[18px] text-left max-w-l font-inter mb-[10px] sm:mb-[120px] px-4 sm:px-0">
            На сьогоднішній день відомо, що найбільша потреба суспільства – це
            якісні послуги та освіта, <br /> пов’язана з надбанням знань та
            навиків психологічного консультуванням у різних сферах.
          </p>
        </div>
      </div>

      {/* Білий фон на всю ширину + container навігації всередині */}
      <nav className="absolute bottom-[100px] sm:bottom-[130px] w-full bg-white/40 h-[150px] md:h-[99px] shadow-md hidden sm:flex">
        <div className="container m-auto h-full flex justify-center items-center gap-4 sm:gap-8 text-[14px] sm:text-[18px] font-dm flex-wrap">
          <Link
            href="/about"
            className="text-white font-semibold hover:underline"
          >
            ПРО НАС
          </Link>
          <Link
            href="#slider1"
            className="text-white font-semibold hover:underline"
          >
            УПРАВЛІННЯ
          </Link>
          <Link
            href="/questions"
            className="text-white font-semibold hover:underline"
          >
            ЧЛЕНСТВО
          </Link>
          <Link
            href="/education"
            className="text-white font-semibold hover:underline"
          >
            ОСВІТА
          </Link>
          <Link
            href="/reabilitation"
            className="text-white font-semibold hover:underline text-center"
          >
            ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
          </Link>
          <Link
            href="/code"
            className="text-white font-semibold hover:underline"
          >
            ЕТИКА
          </Link>

          {/* Скрытие и перемещение ссылки "ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО" на мобильных */}
          <Link
            href="/legislation"
            className="text-white font-semibold hover:underline text-center sm:order-1 order-10"
          >
            ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО
          </Link>
        </div>
      </nav>
    </section>
  );
}
