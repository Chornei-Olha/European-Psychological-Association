// import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UnderHero() {
  return (
    <section className="container mx-auto mt-[60px] sm:mt-10 px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Левая колонка - Картинка */}
        <div className="flex items-center justify-center md:block h-full">
          <div className="relative w-full md:h-full md:w-auto">
            <h2 className="text-[50px] sm:text-[100px] font-medium font-dm leading-tight">
              Європейська психологічна асоціація
            </h2>
          </div>
        </div>

        {/* Правая колонка - Контент */}
        <div>
          <p className="mt-4 text-[16px] sm:text-[20px] font-inter text-black leading-relaxed">
            Це робота професіоналів психології з великим досвідом роботи у сфері
            вищої освіти Гліба Пріба та Людмили Бегези. У 2025 році вони визнали
            потенційну проблему України – нестачу якісної психологічної освіти,
            науки та практики, що базуються на стандартах Європейського Союзу.
          </p>
          <Link
            href="/about"
            className="inline-flex mt-6 items-center text-[10px] sm:text-[20px] font-inter gap-2 px-3 py-1 sm:px-8 sm:py-1 bg-black hover:bg-blue-700 text-white rounded-[50px] transition"
          >
            ПРО НАС <ArrowRight size={20} />
          </Link>

          {/* Три блока с фоном */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] sm:text-[15px] font-inter">
            <div className="bg-[rgba(226,229,242,1)] p-4 rounded-lg text-left">
              Європейська психологічна асоціація надає можливості з її допомогою
              зробити перші кроки щодо просування себе у спільноті фахівців.
            </div>
            <div className="bg-[rgba(243,244,249,1)] p-4 rounded-lg text-left">
              Прискорюємо особистісне зростання та управлінський досвід через
              інноваційні навчальні техніки базовані на європейських стандартах
              якості.
            </div>
          </div>
        </div>
      </div>
    </section>
    //     <section className="container mx-auto mt-[60px] sm:mt-10 px-4 sm:px-0">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
    //       {/* Левая колонка - Картинка */}
    //       <div className="flex items-center justify-center md:block h-full">
    //         <div className="relative w-full h-[300px] sm:h-[400px] md:h-full md:w-auto">
    //           <Image
    //             src="/assets/Ornament.png"
    //             alt="foto"
    //             fill
    //             className="object-contain"
    //           />
    //         </div>
    //       </div>

    //       {/* Правая колонка - Контент */}
    //       <div>
    //         <h2 className="text-[32px] sm:text-[56px] font-medium font-dm leading-tight">
    //           Європейська психологічна асоціація
    //         </h2>
    //         <p className="mt-4 text-[16px] sm:text-[20px] font-inter text-black leading-relaxed">
    //           Це робота професіоналів психології з великим досвідом роботи у сфері
    //           вищої освіти Гліба Пріба та Людмили Бегези. У 2025 році вони визнали
    //           потенційну проблему України – нестачу якісної психологічної освіти,
    //           науки та практики, що базуються на стандартах Європейського Союзу.
    //         </p>
    //         <Link
    //           href="/about"
    //           className="inline-flex mt-6 items-center text-[10px] sm:text-[20px] font-inter gap-2 px-3 py-1 sm:px-8 sm:py-1 bg-black hover:bg-blue-700 text-white rounded-[50px] transition"
    //         >
    //           ПРО НАС <ArrowRight size={20} />
    //         </Link>

    //         {/* Три блока с фоном */}
    //         <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[14px] sm:text-[15px] font-inter">
    //           <div className="bg-[#0103B8] p-4 rounded-lg text-center text-white">
    //             <Image
    //               src="/assets/Vector2.png"
    //               alt="Logo"
    //               width={80}
    //               height={80}
    //               className="pointer-events-none mb-[12px] mx-auto"
    //             />
    //             Професійний світ, в якому ніхто не буде відчувати нестачу
    //             психологічних знань
    //           </div>
    //           <div className="bg-[rgba(226,229,242,1)] p-4 rounded-lg text-left">
    //             Європейська психологічна асоціація надає можливості з її допомогою
    //             зробити перші кроки щодо просування себе у спільноті фахівців.
    //           </div>
    //           <div className="bg-[rgba(243,244,249,1)] p-4 rounded-lg text-left">
    //             Прискорюємо особистісне зростання та управлінський досвід через
    //             інноваційні навчальні техніки базовані на європейських стандартах
    //             якості.
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );
  );
}
