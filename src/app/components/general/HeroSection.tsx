"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          className="bg-[#0103B8] bg-cover bg-center text-white flex flex-col items-left justify-center h-[749px] w-full"
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
          <nav className="absolute left-0 bottom-[130px] text-[18px] font-dm bg-white w-full h-[99px] flex justify-center items-center gap-8 shadow-md">
            <Link
              href="/about"
              className="text-black font-semibold hover:underline"
            >
              ПРО НАС
            </Link>
            <a href="#" className="text-black font-semibold hover:underline">
              УПРАВЛІННЯ
            </a>
            <Link
              href="/questions"
              className="text-black font-semibold hover:underline"
            >
              {" "}
              ЧЛЕНСТВО
            </Link>
            <Link
              href="/education"
              className="text-black font-semibold hover:underline"
            >
              {" "}
              ОСВІТА
            </Link>
            <Link
              href="/reabilitation"
              className="text-black font-semibold hover:underline"
            >
              ПСИХОЛОГІЧНИЙ
              <br />
              РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
            </Link>
            <Link
              href="/code"
              className="text-black font-semibold hover:underline"
            >
              {" "}
              ЕТИЧНИЙ КОДЕКС
            </Link>
            <Link
              href="/legislation"
              className="text-black font-semibold hover:underline"
            >
              {" "}
              ЗАКОНОДАВСТВО ТА
              <br />
              СПІВРОБІТНИЦТВО
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
