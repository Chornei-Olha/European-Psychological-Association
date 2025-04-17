import Image from "next/image";

export default function Questions() {
  return (
    <section className="relative w-full ml-auto mr-auto h-[650px] flex justify-center pt-[150px] text-center text-white">
      {/* Фоновое изображение */}
      <div>
        <Image
          src="/assets/back.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl px-6">
        <h1 className="text-[56px] font-dm font-medium text-black">
          ЯК СТАТИ ЧЛЕНОМ ЄПА?
        </h1>
        <p className="mt-[25px] text-[20px] font-inter font-regular text-black">
          До ЕПА можуть приєднуватися фізичні особи, прийом яких до складу
          членів Є-П-А здійснюється на підставі рішення Президента, що
          приймається за результатами розгляду особистої заяви особи.{" "}
        </p>
      </div>
    </section>
  );
}
