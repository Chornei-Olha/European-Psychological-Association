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
    <section className="bg-[#BFD6EC] mt-[100px] sm:mt-[150px] mx-[15px] sm:mx-0 py-12 px-4 rounded-[20px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 md:mt-[32px] ml-0 md:ml-[42px] gap-6 md:gap-0 relative">
        <h2 className="text-[32px] md:text-[80px] font-dm font-regular leading-tight text-[#0103B8]">
          ПСИХОЛОГІЧНИЙ <br className="hidden md:block" /> РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
        </h2>

        {/* Мобильная версия: stars.png под заголовком с absolute позиционированием */}
        <div className="absolute right-0 bottom-[-20px] md:hidden">
          <Image
            src="/assets/stars.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </div>

        <div className="hidden md:flex justify-end w-full md:w-auto">
          <Image
            src="/assets/stars.png"
            alt="Logo"
            width={213}
            height={213}
            className="w-[100px] h-[100px] md:w-[213px] md:h-[213px]"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 mt-8">
        {/* Левая часть */}
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-[16px] md:text-[20px] font-inter font-regular ml-0 md:ml-[42px] mt-4 pb-3">
            Психологічний реабілітаційний центр обладнаний трьома кабінетами, де
            проводиться консультативна, психотерапевтична, корекційна робота з
            клієнтами.
          </p>
          <button className="px-6 py-2 bg-black hover:bg-blue-700 text-white font-reem transition w-fit ml-0 md:ml-[42px] mt-6 mb-6 md:mt-[50px] md:mb-[50px]">
            Реєстрація
          </button>
          <p className="text-[14px] md:text-[16px] font-reem font-regular ml-0 md:ml-[42px] pt-3">
            Психологічний реабілітаційний центр є структурним підрозділом
            Європейської психологічної асоціації, які розміщений на 7 поверху за
            адресом Україна, м. Київ, вул. Глибочицька, будинок 17 (літ.1А),
            офіс 708.
            <br />
            Навчальний корпус – сучасне мультимедійне обладнані аудиторії.
            Аудиторії є лекційним простором, а також місцем для практичної
            роботи з кейсами і презентаціями, пошуку натхнення та ідей.
            <br />
            Психологічний реабілітаційний центр обладнаний трьома кабінетами, де
            проводиться консультативна, психотерапевтична, корекційна робота з
            клієнтами.
          </p>
        </div>

        {/* Правая часть */}
        <div className="flex flex-col w-full md:w-1/2 gap-4 mt-6 md:mt-[70px]">
          {items.map(({ id, image, text }) => (
            <div
              key={id}
              className="border-none rounded-[20px] p-4 flex flex-row gap-4 items-center bg-white shadow"
            >
              <Image
                src={image}
                alt={`Іконка ${id}`}
                width={40}
                height={40}
                className="w-[40px] h-[40px] md:w-[56px] md:h-[56px]"
              />
              <p className="text-black text-[14px] md:text-[16px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";

// export default function TypesCabinets() {
//   const items = [
//     {
//       id: 1,
//       image: "/assets/Icon.png",
//       text: "Кабінет індивідуальних консультацій",
//     },
//     {
//       id: 2,
//       image: "/assets/Icon.png",
//       text: "Кабінет психологічної діагностики",
//     },
//     {
//       id: 3,
//       image: "/assets/Icon.png",
//       text: "Кабінет профорієнтації та профвідбору",
//     },
//   ];
//   return (
//     <section className="bg-[#BFD6EC] mt-[100px] py-12 px-4 rounded-[20px]">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 md:mt-[32px] ml-0 md:ml-[42px] gap-6 md:gap-0">
//         <h2 className="text-[32px] md:text-[80px] font-dm font-regular leading-tight">
//           ПСИХОЛОГІЧНИЙ <br className="hidden md:block" /> РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
//         </h2>
//         <div className="flex justify-center md:justify-end w-full md:w-auto">
//           <Image
//             src="/assets/stars.png"
//             alt="Logo"
//             width={213}
//             height={213}
//             className="w-[100px] h-[100px] md:w-[213px] md:h-[213px]"
//           />
//         </div>
//       </div>

//       <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 mt-8">
//         {/* Левая часть */}
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="text-[16px] md:text-[20px] font-inter font-regular ml-0 md:ml-[42px] mt-4">
//             Психологічний реабілітаційний центр обладнаний трьома кабінетами, де
//             проводиться консультативна, психотерапевтична, корекційна робота з
//             клієнтами.
//           </p>
//           <button className="px-6 py-2 bg-black hover:bg-blue-700 text-white font-reem transition w-fit ml-0 md:ml-[42px] mt-6 mb-6 md:mt-[50px] md:mb-[50px]">
//             ДОКЛАДНІШЕ
//           </button>
//           <p className="text-[14px] md:text-[16px] font-reem font-regular ml-0 md:ml-[42px]">
//             Психологічний реабілітаційний центр є структурним підрозділом
//             Європейської психологічної асоціації, які розміщений на 7 поверху за
//             адресом Україна, м. Київ, вул. Глибочицька, будинок 17 (літ.1А),
//             офіс 708.
//             <br />
//             Навчальний корпус – сучасне мультимедійне обладнані аудиторії.
//             Аудиторії є лекційним простором, а також місцем для практичної
//             роботи з кейсами і презентаціями, пошуку натхнення та ідей.
//             <br />
//             Психологічний реабілітаційний центр обладнаний трьома кабінетами, де
//             проводиться консультативна, психотерапевтична, корекційна робота з
//             клієнтами.
//           </p>
//         </div>

//         {/* Правая часть */}
//         <div className="flex flex-col w-full md:w-1/2 gap-4 mt-6 md:mt-[70px]">
//           {items.map(({ id, image, text }) => (
//             <div
//               key={id}
//               className="border-none rounded-[20px] p-4 flex flex-row gap-4 items-center bg-white shadow"
//             >
//               <Image
//                 src={image}
//                 alt={`Іконка ${id}`}
//                 width={40}
//                 height={40}
//                 className="w-[40px] h-[40px] md:w-[56px] md:h-[56px]"
//               />
//               <p className="text-black text-[14px] md:text-[16px]">{text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
