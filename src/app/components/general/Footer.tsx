import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0103B8] w-full text-center overflow-hidden">
      <div className="container mx-auto py-[70px] max-w-[1241px] px-4">
        <div className="flex flex-col md:flex-row justify-between text-white gap-8 md:gap-0">
          {/* Ліва частина з текстом */}
          <div className="flex flex-col space-y-2 text-left">
            <p className="text-[16px] font-inter font-regular">
              Україна, 04052, м. Київ, вул. Глибочицька,
              <br />
              будинок 17 (літ. 1А), офіс 708
            </p>
            <div className="text-[16px] font-inter font-regular pt-[30px] md:pt-[50px]">
              <p>Phone: +380 123 456 789</p>
              <p>Email: example@email.com</p>
              <p>р/р: 12345678901234567890</p>
            </div>
          </div>

          {/* Логотип справа (в центрі на мобілці) */}
          <div className="relative w-[50%] mx-auto md:mx-0 md:w-[15vw]">
            <Image
              src="/assets/logo.png"
              alt="ЄПА"
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 15vw"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Copyright в самому низу */}
        <div className="mt-8 md:mt-5">
          <p className="text-center text-[16px] font-inter font-regular text-white/50">
            Copyright © ЄПА 2025
          </p>
        </div>

        {/* Фонове зображення */}
        <div className="absolute top-0 right-0 transform translate-x-1/5 -translate-y-1/5 pointer-events-none">
          <Image
            src="/assets/Vector2.png"
            alt="ЄПА"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[20vw] md:w-[10vw] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
