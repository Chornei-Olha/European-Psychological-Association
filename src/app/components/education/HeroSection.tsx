import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#0103B8] px-[100px] pt-[100px] pb-[50px] flex justify-end w-full relative text-white overflow-hidden mx-4 md:mx-0">
      {/* Лого */}
      <Image
        src="/assets/vectorL.png"
        alt="Left Logo"
        width={106}
        height={212}
        className="absolute bottom-1/8 transform -translate-y-1/2 pointer-events-none left-0"
      />

      <Image
        src="/assets/vectorR.png"
        alt="Right Logo"
        width={106}
        height={218}
        className="absolute top-1/8 transform pointer-events-none right-0"
      />

      {/* Контент */}
      <div className="mx-auto px-6 text-left space-y-8 max-w-[1241px]">
        <h1 className="text-[190px] font-semibold font-inter text-[rgba(255,255,255,0.37)]">
          Освіта
        </h1>
        <h2 className="text-[56px] font-medium">Освітній процес</h2>
        <p className="text-[20px] pt-[70px]">
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
