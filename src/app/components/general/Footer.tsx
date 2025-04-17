import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0103B8] w-full text-center overflow-hidden">
      <div className="container mx-auto p-[70px]">
        <div className="flex justify-between text-white">
          {/* Ліва частина з текстом */}
          <div className="flex flex-col space-y-2">
            <p className="text-[16px] text-left font-inter font-regular">
              Україна, 04052, м. Київ, вул. Глибочицька,
              <br />
              будинок 17 (літ. 1А), офіс 708
            </p>
            <div className="text-[16px] text-left font-inter font-regular pt-[50px]">
              <p>Phone: +380 123 456 789</p>
              <p>Email: example@email.com</p>
              <p>р/р: 12345678901234567890</p>
            </div>
          </div>

          {/* Логотип справа */}
          <div className="relative" style={{ width: "15vw", height: "auto" }}>
            <Image
              src="/assets/logo.png"
              alt="ЄПА"
              width={0}
              height={0}
              sizes="15vw"
              className="w-[15vw] h-auto"
            />
          </div>
        </div>

        {/* Copyright в самому низу */}
        <div className="mt-5">
          <p className="text-center text-[16px] font-inter font-regular text-white/50">
            Copyright © ЄПА 2025
          </p>
        </div>

        <div className="absolute top-0 right-0 transform translate-x-1/5 -translate-y-1/5 pointer-events-none">
          <Image
            src="/assets/Vector2.png"
            alt="ЄПА"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[10vw] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
