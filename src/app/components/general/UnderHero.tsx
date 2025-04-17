import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function UnderHero() {
  return (
    <section className="container mx-auto mt-[60px] sm:mt-[100px] px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Левая колонка - Картинка */}
        <div className="flex items-center justify-center md:block h-full">
          <div className="h-full w-auto">
            <Image
              src="/assets/Ornament.png"
              alt="Описание изображения"
              width={1000}
              height={1000}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Правая колонка - Контент */}
        <div>
          <h2 className="text-[32px] sm:text-[56px] font-medium font-dm leading-tight">
            Європейська психологічна асоціація
          </h2>
          <p className="mt-4 text-[16px] sm:text-[20px] font-inter text-black leading-relaxed">
            Це робота професіоналів психології з великим досвідом роботи у сфері
            вищої освіти Гліба Пріба та Людмили Бегези. У 2025 році вони визнали
            потенційну проблему України – нестачу якісної психологічної освіти,
            науки та практики, що базуються на стандартах Європейського Союзу.
          </p>
          <button className="mt-6 flex items-center text-[18px] sm:text-[24px] font-inter gap-2 px-6 py-2 sm:px-15 sm:py-3 bg-black hover:bg-blue-700 text-white rounded-[50px] transition">
            ПРО НАС <ArrowRight size={20} />
          </button>

          {/* Три блока с фоном */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[14px] sm:text-[15px] font-inter">
            <div className="bg-[#0103B8] p-4 rounded-lg text-center text-white">
              <Image
                src="/assets/Vector2.png"
                alt="Logo"
                width={80}
                height={80}
                className="pointer-events-none mb-[12px] mx-auto"
              />
              Професійний світ, в якому ніхто не буде відчувати нестачу
              психологічних знань
            </div>
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
  );
}
