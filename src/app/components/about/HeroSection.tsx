import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#0103B8] pt-[100px] pb-[50px] flex flex-col md:flex-row justify-end w-full relative text-white overflow-hidden md:mx-0 px-4 sm:px-8">
      {/* Лого */}
      <Image
        src="/assets/vectorL.png"
        alt="Left Logo"
        width={106}
        height={212}
        className="absolute bottom-0 sm:bottom-1/8 transform -translate-y-1/2 pointer-events-none left-0 z-0 opacity-40 md:opacity-100"
      />

      <Image
        src="/assets/vectorR.png"
        alt="Right Logo"
        width={106}
        height={218}
        className="absolute top-0 sm:top-1/8 transform pointer-events-none right-0"
      />

      {/* Контент */}
      <div className="relative mx-auto text-left space-y-6 sm:space-y-8 z-10 max-w-full sm:max-w-[1241px]">
        <h1 className="text-[64px] sm:text-[100px] font-semibold font-inter text-[rgba(255,255,255,0.37)] leading-none">
          Про нас
        </h1>
        <h2 className="text-[28px] sm:text-[56px] font-medium">Навіщо?</h2>
        <p className="text-[16px] sm:text-[20px] max-w-full sm:max-w-[806px] leading-relaxed font-inter">
          Наші роздуми виражені скрізь наше ясне бачення. Європейська
          психологічна асоціація просуває європейські стандарти психологічної
          освіти, науці та практики в Україні, пропонуючи фахівцям інновації та
          взаємодію.
        </p>
        <h2 className="text-[28px] sm:text-[56px] font-medium">Створення</h2>
        <p className="text-[16px] sm:text-[20px] max-w-full sm:max-w-[1241px] leading-relaxed font-inter">
          Європейська психологічна асоціація - це робота професіоналів
          психології з великим досвідом роботи у сфері вищої освіти Гліба Пріба
          та Людмили Бегези. У 2025 році вони визнали потенційну проблему
          України – нестачу якісної психологічної освіти, науки та практики, що
          базуються на стандартах Європейського Союзу. Європейська психологічна
          асоціація - єдиний у Україні кластерний інкубатор освіти. Створений у
          2025 році для задоволення потреби української психологічної освіти,
          науці та практики, який просуває сучасні знання, надаючи можливості
          новим особистостям. Розуміючи значний вплив, який психологічні знання
          справляють на людське співтовариство, вони розглядають психологічну
          освіту, науку та практику як рушійну силу у особистісному,
          професійному, культурному та управлінському зростанні. Спираючись на
          психологічні школи України та сучасні психологічні знання, ідея
          полягає у тому, щоб створити місце, яке використовує ресурси та
          можливості доступні у Європейському Союзі та Україні, для допомоги
          зацікавленій особистості сформувати себе як професійного психолога,
          управлінця та лідера. Це стало натхненням й «Європейська психологічна
          асоціація» народились.
        </p>
      </div>
    </section>
  );
}
