"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"), {
  ssr: false,
});

export default function TwoColumnSection() {
  return (
    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {/* Левая колонка */}
      <div className="flex flex-col justify-start">
        <h2 className="text-3xl font-bold mb-4">Освіта</h2>
        <p className="text-gray-600 mb-4">
          Освітній процес – це обмін досвідом за допомогою сучасних технологій.
          Кожен слухач має постійний он-лайн доступ до навчальних матеріалів
          (презентації, відео-контент, тощо), а викладачі є постійними менторами
          з Вами при опрацювання практичних кейсів.{" "}
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded mb-4 w-fit hover:bg-blue-600 transition">
          ДОКЛАДНІШЕ
        </button>
        <Image
          src="/image-left.jpg"
          alt="Картинка слева"
          width={600}
          height={300}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Правая колонка */}
      <div className="flex flex-col justify-between">
        <VideoPlayer
          src="/video.mp4"
          className="w-full h-auto max-h-[250px] rounded-lg"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <p className="text-gray-600">
            Дополнительный текст в правой колонке.
          </p>
          <Image
            src="/image-right.jpg"
            alt="Картинка справа"
            width={300}
            height={150}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
