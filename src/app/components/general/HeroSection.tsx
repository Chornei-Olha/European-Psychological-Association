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
        className="absolute top-1/8 transform pointer-events-none right-0"
      />

      <div className="container">
        <div
          className="bg-cover bg-center text-white flex flex-col items-left justify-center h-[749px] w-full"
          style={{ backgroundImage: "url('/assets/map.png')" }}
        >
          <h1 className="text-[68px] leading-tight font-bold mb-4 font-prosto">
            ЄВРОПЕЙСЬКА
            <br />
            ПСИХОЛОГІЧНА АСОЦІАЦІЯ
          </h1>
          <p className="text-[18px] text-left max-w-l font-inter mb-[81px]">
            На сьогоднішній день відомо, що найбільша потреба суспільства – це
            якісні послуги та освіта, <br /> пов’язана з надбанням знань та
            навиків психологічного консультуванням у різних сферах.
          </p>
        </div>
      </div>

      {/* Білий фон на всю ширину + container навігації всередині */}
      <nav className="absolute bottom-[130px] w-full bg-white h-[99px] shadow-md">
        <div className=" h-full flex justify-center items-center gap-8 text-[18px] font-dm">
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
          <Link
            href="/legislation"
            className="text-black font-semibold hover:underline text-center"
          >
            ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО
          </Link>
        </div>
      </nav>
    </section>
  );
}
