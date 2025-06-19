// import Image from "next/image";

export default function Questions() {
  return (
    <section className="bg-[#D5E5FF] relative w-full ml-auto mr-auto flex justify-center pt-[150px] text-center text-white max-[768px]:pt-[100px]">
      {/* Фоновое изображение */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/assets/back.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover"
        />
      </div> */}

      {/* Контент */}
      <div className="relative z-10 max-w-7xl px-6 max-[768px]:px-4">
        <h1 className="text-[56px] font-dm font-medium text-black max-[768px]:text-[32px] max-[768px]:leading-tight">
          ЯК СТАТИ ЧЛЕНОМ Є-П-А?
        </h1>
        <p className="mt-[25px] text-[20px] font-inter font-regular text-black max-[768px]:text-[16px] max-[768px]:mt-4">
          До Є-П-А можуть приєднуватися фізичні особи, прийом яких до складу
          членів Є-П-А здійснюється на підставі рішення президента, що
          приймається за результатами розгляду особистої заяви кандидата.
        </p>

        <div className="flex justify-center">
          <a
            href="https://forms.gle/k9koq1t5o6khWSDG8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-black hover:bg-blue-700 text-white font-reem transition w-fit mt-6 mb-6 md:mt-[50px] md:mb-[50px] text-center"
          >
            Приєднатися
          </a>
        </div>
        <p className="text-[16px] md:text-[17px] font-medium font-dm text-black">
          У 2025 році розмір членського внеску становить 1000 гривень.
        </p>
      </div>
    </section>
  );
}
