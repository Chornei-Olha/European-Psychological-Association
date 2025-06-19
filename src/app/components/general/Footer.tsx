import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0103B8] w-full text-center overflow-hidden">
      <div className="container mx-auto pt-[30px] pb-[70px] md:py-[30px] max-w-[1241px] px-4">
        <div className="flex flex-col md:flex-row justify-between text-white gap-8 md:gap-0">
          {/* Ліва частина з текстом */}
          <div className="flex flex-col space-y-2 text-left">
            <p className="text-[16px] font-inter font-regular">
              Україна, 04052, м. Київ, вул. Глибочицька,
              <br />
              будинок 17 (літ. 1А), офіс 708
            </p>
            <div className="text-[16px] font-inter font-regular pt-[30px] md:pt-[50px]">
              <p>
                Phone:{" "}
                <a
                  href="tel:+380679355699"
                  className="text-white hover:underline"
                >
                  +38(067)93 55 699
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:pribhlib@gmail.com"
                  className="text-white hover:underline"
                >
                  pribhlib@gmail.com
                </a>
              </p>

              {/* <p>р/р: 12345678901234567890</p> */}
            </div>
          </div>

          {/* Логотип для десктопов (показывается только на десктопах) */}
          <div className="relative w-[40%] mx-auto md:mx-0 md:w-[8vw] hidden md:block">
            <Image
              src="/assets/logoMEn.svg"
              alt="Є-П-А"
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 15vw"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Copyright в самому низу */}
        <div className="mt-8 md:mt-5 mb-8 md:mb-0">
          <p className="text-center text-[16px] font-inter font-regular text-white/50">
            Copyright © Є-П-А 2025
          </p>
        </div>
      </div>
      {/* Логотип для мобильных устройств (показывается только на мобильных) */}
      <div className="absolute text-left w-[40%] bottom-[20px] left-[20px] block md:hidden">
        <Image
          src="/assets/logoDEn.svg"
          alt="Є-П-А"
          width={0}
          height={0}
          sizes="(max-width: 768px) 50vw, 15vw"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}
