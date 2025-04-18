"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const VideoPlayer = dynamic(
  () => import("@/app/components/general/VideoPlayer"),
  {
    ssr: false,
  }
);

export default function TwoColumnSection() {
  return (
    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-4 sm: mb-[100px] md:mb-0">
      {/* Левая колонка */}
      <div className="flex flex-col justify-start">
        <h2 className="text-[40px] sm:text-[80px] font-regular font-dm text-black">
          Освіта
        </h2>
        <p className="text-[16px] sm:text-[20px] font-regular font-inter text-black mt-[20px] sm:mt-[50px] w-full sm:w-[550px]">
          Освітній процес – це обмін досвідом за допомогою сучасних технологій.
          Кожен слухач має постійний он-лайн доступ до навчальних матеріалів
          (презентації, відео-контент, тощо), а викладачі є постійними менторами
          з Вами при опрацювання практичних кейсів.
        </p>
        <Link
          href="/education"
          className="inline-block mt-[15px] sm:mt-[25px] px-[24px] py-[8px] bg-black hover:bg-blue-700 text-white font-reem transition w-fit"
        >
          ДОКЛАДНІШЕ
        </Link>

        <Image
          src="/assets/Photo.png"
          alt="psychology"
          width={600}
          height={300}
          className="mt-[25px] sm:mt-[50px] w-full h-[222px] object-cover rounded-[20px]"
        />
      </div>

      {/* Правая колонка */}
      <div className="flex flex-col justify-between">
        <VideoPlayer
          src="/assets/stub.mp4"
          className="w-full h-auto max-h-[300px] sm:max-h-[486px] rounded-lg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 h-[200px] sm:h-[224px]">
          <p className="text-[14px] sm:text-[16px] font-medium font-dm text-white bg-[#09234B] text-center p-[15px] sm:p-[20px] rounded-[20px]">
            Освітні програми проходять незалежне експертне рецензування та
            затверджуються Експертною радою Є-П-А та Вченими радами освітніх
            партнерів.
          </p>
          <Image
            src="/assets/woman.png"
            alt="psychology"
            width={300}
            height={224}
            className="h-[200px] sm:h-[224px] w-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
