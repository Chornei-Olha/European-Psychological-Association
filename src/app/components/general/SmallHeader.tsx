"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react"; // або будь-яка інша іконка

export default function SmallHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Сам хедер */}
      <header className="bg-[#0103B8] w-full text-white z-50 fixed top-0 left-0 h-[60px]">
        <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-[1241px]">
          {/* Логотип */}
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="ЄПА Лого"
              width={100}
              height={40}
              className="h-auto w-[100px]"
            />
          </Link>

          {/* Бургер-меню */}
          <button onClick={() => setMenuOpen(true)} className="text-white">
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Бокове меню */}
      <div
        className={`fixed top-0 right-0 h-full w-[30%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4 text-black font-dm text-[18px]">
          <button
            className="self-end text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <Link
            href="/about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ПРО НАС
          </Link>
          <Link
            href="/#board"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            УПРАВЛІННЯ
          </Link>
          <Link
            href="/questions"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ЧЛЕНСТВО
          </Link>
          <Link
            href="/education"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ОСВІТА
          </Link>
          <Link
            href="/reabilitation"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
          </Link>
          <Link
            href="/code"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ЕТИЧНИЙ КОДЕКС
          </Link>
          <Link
            href="/legislation"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО
          </Link>
        </div>
      </div>

      {/* Прозорий бекдроп при відкритому меню */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
