import Image from "next/image";

export default function Questions() {
  return (
    <section className="container relative w-full h-[600px] flex justify-center pt-[50px] sm:pt-[80px] text-center text-white">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden">
        <Image
          src="/assets/back.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl px-6 sm:px-8">
        <h1 className="text-[32px] sm:text-[56px] font-dm font-medium text-black">
          ЯК СТАТИ ЧЛЕНОМ ЄПА?
        </h1>
        <p className="mt-[20px] sm:mt-[25px] text-[16px] sm:text-[20px] font-inter font-regular text-black">
          До ЕПА можуть приєднуватися фізичні особи, прийом яких до складу
          членів Є-П-А здійснюється на підставі рішення Президента, що
          приймається за результатами розгляду особистої заяви особи.
        </p>
        <button className="mt-[20px] sm:mt-[25px] px-[20px] sm:px-[31.5px] py-[8px] sm:py-[6px] bg-black hover:bg-blue-700 text-white font-reem transition">
          ДОКЛАДНІШЕ
        </button>
      </div>
    </section>
  );
}
