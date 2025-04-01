import Image from "next/image";

export default function Questions() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden">
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
        <h1 className="text-4xl font-bold">ЯК СТАТИ ЧЛЕНОМ ЄПА?</h1>
        <p className="mt-4 text-lg">
          До ЕПА можуть приєднуватися фізичні особи, прийом яких до складу
          членів Є-П-А здійснюється на підставі рішення Президента, що
          приймається за результатами розгляду особистої заяви особи.{" "}
        </p>
        <button className="mt-6 px-6 py-3 bg-black hover:bg-blue-700 text-white rounded-lg transition">
          ДОКЛАДНІШЕ
        </button>
      </div>
    </section>
  );
}
