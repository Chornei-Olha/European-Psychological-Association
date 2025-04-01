"use client";

export default function HeroSection() {
  return (
    <section
      className="bg-[#0103B8] bg-cover bg-center text-white flex flex-col items-center justify-center h-[500px] w-full"
      style={{ backgroundImage: "url('/assets/map.png')" }}
    >
      <h1 className="text-4xl font-bold mb-4">
        ЄВРОПЕЙСЬКА
        <br />
        ПСИХОЛОГІЧНА АСОЦІАЦІЯ
      </h1>
      <p className="text-lg text-left max-w-l">
        На сьогоднішній день відомо, що найбільша потреба суспільства – це
        якісні послуги та освіта, <br /> пов’язана з надбанням знань та навиків
        психологічного консультуванням у різних сферах.
      </p>
      <nav className="bg-white w-full h-[99px] flex justify-center items-center gap-8 shadow-md">
        <a href="#" className="text-black font-semibold hover:underline">
          ПРО НАС
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          УПРАВЛІННЯ
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          ЧЛЕНСТВО
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          ОСВІТА
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          ПСИХОЛОГІЧНИЙ РЕАБІЛІТАЦІЙНИЙ ЦЕНТР
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          ЕТИЧНИЙ КОДЕКС
        </a>
        <a href="#" className="text-black font-semibold hover:underline">
          ЗАКОНОДАВСТВО ТА
          <br />
          СПІВРОБІТНИЦТВО
        </a>
      </nav>
    </section>
  );
}
