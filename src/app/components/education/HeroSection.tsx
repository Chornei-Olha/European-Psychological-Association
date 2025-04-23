import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#0103B8] pt-[150px] pb-[50px] flex justify-end w-full relative text-white overflow-hidden px-6">
      {/* Лого */}
      <Image
        src="/assets/vectorL.png"
        alt="Left Logo"
        width={106}
        height={212}
        className="absolute bottom-[12.5%] transform -translate-y-1/2 pointer-events-none left-0 md:bottom-1/8 opacity-40 md:opacity-100"
      />

      <Image
        src="/assets/vectorR.png"
        alt="Right Logo"
        width={106}
        height={218}
        className="absolute top-[12.5%] transform pointer-events-none right-0 md:top-1/8 z-0"
      />

      {/* Контент */}
      <div className="mx-auto text-left space-y-8 max-w-7xl z-10">
        <h1
          id="program1"
          className=" font-regular font-inter text-[rgba(255,255,255,0.37)] md:text-[100px] text-[64px] leading-none"
        >
          Освіта
        </h1>
        <h2 className="font-regular pt-[20px] md:text-[56px] text-[28px]">
          Освітній процес
        </h2>
        <p className="pt-[20px] md:text-[20px] text-[16px] md:pt-[70px]">
          Методика викладання – це захоплюючий процес, якій передбачає лекційні
          та практичні зайняття, а також он-лайн роботу, де слухач є активним
          учасником, а атестація знань та відповідний сертифікат відповідає
          Європейської системі трансферу оцінок (European Community Course
          Credit Transfer System). Освітні програми проходять незалежне
          експертне рецензування та затверджуються Експертною радою Є-П-А та
          Вченими радами освітніх партнерів.
        </p>
      </div>
    </section>
  );
}
