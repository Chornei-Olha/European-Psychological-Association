"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

interface MenuItem {
  title: string;
  href?: string;
  subItems?: { title: string; href: string }[];
}
interface SmallHeaderProps {
  className?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "ПРО НАС",
    subItems: [
      { title: "Історія", href: "/about#history" },
      { title: "Візія", href: "/about#vision" },
      { title: "Місія", href: "/about#mission" },
      { title: "Мета", href: "/about#goal" },
    ],
  },
  {
    title: "УПРАВЛІННЯ",
    subItems: [
      { title: "Правління", href: "/#slider1" },
      { title: "Наглядова рада", href: "/#slider2" },
      { title: "Експертна рада", href: "/#slider3" },
    ],
  },
  { title: "ЧЛЕНСТВО", href: "/questions" },
  {
    title: "ОСВІТА",
    subItems: [
      { title: "Сертифікаційні програми", href: "/education#program1" },
      { title: "Тренінгові програми", href: "/education#program2" },
      { title: "Семінари", href: "/education#program3" },
    ],
  },
  { title: "ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР", href: "/reabilitation" },
  { title: "ЕТИКА", href: "/code" },
  {
    title: "ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО",
    subItems: [
      { title: "Нормативна база", href: "/legislation#baza" },
      { title: "Партнери", href: "/legislation#partners" },
    ],
  },
  {
    title: "КОНТЕНТ",
    subItems: [
      { title: "Тексти", href: "/content#text" },
      { title: "Відео", href: "/content#video" },
    ],
  },
];

export default function SmallHeader({ className }: SmallHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Header */}
      <header
        className={`bg-[#0103B8] fixed top-0 left-0 w-full h-[80px] sm:h-[120px] z-40 text-white ${
          className ?? ""
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logoT.svg"
              alt="Є-П-А Лого"
              width={120}
              height={40}
              className="pl-[15px] sm:pl-0 h-auto w-[150px] sm:w-[200px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-2 items-center gap-7">
            {menuItems.map((item, idx) => {
              const isOpen = expandedIndex === idx;

              const handleClick = () => {
                setExpandedIndex(isOpen ? null : idx);
              };

              return (
                <div key={idx} className="relative">
                  <button
                    onClick={handleClick}
                    className="flex items-center gap-1 text-[12px] hover:underline"
                  >
                    {item.href ? (
                      <Link href={item.href}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                    {item.subItems && <ChevronDown size={13} />}
                  </button>

                  {item.subItems && isOpen && (
                    <div className="absolute left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg z-50">
                      {item.subItems.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setExpandedIndex(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Burger */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#D5E5FF] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 space-y-4 text-black font-dm text-[18px] relative overflow-y-auto h-full">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <button
                    className="w-full text-left flex justify-between items-center py-2"
                    onClick={() => toggleItem(index)}
                  >
                    {item.title}
                    <ChevronDown
                      className={`transform transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedIndex === index && (
                    <div className="pl-4 py-2 space-y-2">
                      {item.subItems.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          className="block hover:underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTimeout(() => setMenuOpen(false), 100);
                          }}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                item.href && (
                  <Link
                    href={item.href}
                    className="block py-2 hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// interface SmallHeaderProps {
//   className?: string;
// }

// export default function SmallHeader({ className }: SmallHeaderProps) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Хедер */}
//       <header
//         className={`bg-[#0103B8] w-full text-white z-50 fixed top-0 left-0 h-[80px] ${className}`}
//       >
//         <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-[1241px]">
//           {/* Логотип */}
//           <Link href="/">
//             <Image
//               src="/assets/logo.png"
//               alt="Є-П-А Лого"
//               width={100}
//               height={40}
//               className="h-auto w-[120px] sm:w-[120px]"
//             />
//           </Link>

//           {/* Бургер */}
//           <button onClick={() => setMenuOpen(true)} className="text-white">
//             <Menu size={32} />
//           </button>
//         </div>
//       </header>

//       {/* Мобільне меню */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[80%] sm:w-[30%] bg-[#D5E5FF] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6 flex flex-col space-y-4 text-black font-dm text-[18px]">
//           <button
//             className="self-end text-2xl"
//             onClick={() => setMenuOpen(false)}
//           >
//             ✕
//           </button>
//           <Link
//             href="/about"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ПРО НАС
//           </Link>
//           <Link
//             href="/#board"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             УПРАВЛІННЯ
//           </Link>
//           <Link
//             href="/questions"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ЧЛЕНСТВО
//           </Link>
//           <Link
//             href="/education"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ОСВІТА
//           </Link>
//           <Link
//             href="/reabilitation"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
//           </Link>
//           <Link
//             href="/code"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ЕТИКА
//           </Link>
//           <Link
//             href="/legislation"
//             className="hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             ЗАКОНОДАВСТВО ТА СПІВРОБІТНИЦТВО
//           </Link>
//         </div>
//       </div>

//       {/* Бекдроп */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 sm:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// }
