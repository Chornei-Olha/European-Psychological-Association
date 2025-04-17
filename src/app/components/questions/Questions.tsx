import Image from "next/image";

export default function Questions() {
  return (
    <section className="relative w-full ml-auto mr-auto h-[650px] flex justify-center pt-[150px] text-center text-white max-[768px]:pt-[100px] min-[769px]:min-h-screen max-[768px]:h-[600px]">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/back.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl px-6 max-[768px]:px-4">
        <h1 className="text-[56px] font-dm font-medium text-black max-[768px]:text-[32px] max-[768px]:leading-tight">
          ЯК СТАТИ ЧЛЕНОМ ЄПА?
        </h1>
        <p className="mt-[25px] text-[20px] font-inter font-regular text-black max-[768px]:text-[16px] max-[768px]:mt-4">
          До ЕПА можуть приєднуватися фізичні особи, прийом яких до складу
          членів Є-П-А здійснюється на підставі рішення Президента, що
          приймається за результатами розгляду особистої заяви особи.
        </p>
      </div>
    </section>
  );
}
