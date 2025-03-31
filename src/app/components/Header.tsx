"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full p-4 flex justify-between items-center bg-[#8da883] shadow-md relative">
      <div>
        <a
          href="tel:+4368184242756"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mb-2 tracking-widest hover:text-[#1C5107]"
        >
          +4368184242756
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-transparent border-none text-lg text-white">
          Menü
        </button>
        <button
          className="text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-12 text-left bg-white p-6 rounded-lg shadow-lg z-50 flex flex-col gap-3">
          <button
            className="text-[#1C5107] text-left"
            onClick={() => scrollToSection("about")}
          >
            Über uns
          </button>
          <button
            className="text-[#1C5107] text-left"
            onClick={() => scrollToSection("services")}
          >
            Unsere Vorteile
          </button>
        </nav>
      )}
    </header>
  );
}
