import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function UnderHero() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Левая колонка - Картинка */}
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/assets/Ornament.png"
            alt="Описание изображения"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        {/* Правая колонка - Контент */}
        <div>
          <h2 className="text-3xl font-bold">
            Європейська психологічна асоціація
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Це робота професіоналів психології з великим досвідом роботи у сфері
            вищої освіти Гліба Пріба та Людмили Бегези. У 2025 році вони визнали
            потенційну проблему України – нестачу якісної психологічної освіти,
            науки та практики, що базуються на стандартах Європейського Союзу.{" "}
          </p>
          <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            ПРО НАС <ArrowRight size={20} />
          </button>

          {/* Три блока с фоном */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-left">
              Професійний світ, в якому ніхто не буде відчувати нестачу
              психологічних знань{" "}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-left">
              Європейська психологічна асоціація надає можливості з її допомогою
              зробити перші кроки щодо просування себе у спільноті фахівців.{" "}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-left">
              Прискорюємо особистісне зростання та управлінський досвід через
              інноваційні навчальні техніки базовані на європейських стандартах
              якості.{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
