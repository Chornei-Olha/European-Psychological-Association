import Image from "next/image";

export default function Texts() {
  return (
    <section
      id="text"
      className="bg-[#BFD6EC] px-4 pt-25 pb-12 md:px-[100px] md:pt-[150px] md:pb-[50px] flex justify-end w-full relative text-white overflow-hidden"
    >
      {/* Лого — скрыто на мобилках */}
      <Image
        src="/assets/vectorL.png"
        alt="Left Logo"
        width={100}
        height={200}
        className="absolute bottom-4 left-0 pointer-events-none hidden md:block  opacity-40 md:opacity-100"
      />

      <div className="w-full max-w-[1241px] mx-auto text-left text-black">
        <div className="px-2 md:px-0 space-y-4 md:space-y-6">
          <h1 className="text-[32px] md:text-[56px] font-inter font-regular leading-tight break-words">
            ТЕКСТИ{" "}
          </h1>

          <div className="text-[12px] md:text-[23px] font-inter font-light leading-relaxed space-y-4 break-words">
            <p>
              <a
                href="https://www.researchgate.net/publication/377086727_Mentalne_zdorov'a_osobistosti_ta_organizacii"
                target="_blank"
                rel="noopener noreferrer"
              >
                Монографія &quot;Ментальне здоров&apos;я особистості та
                організації&quot;  Колективна монографія за заг. ред. : Г.А.
                Пріба, Л.Є. Бегези. – Київ : ТОВ &quot;Типографія АМГ&quot;,
                2024. - 518с.{" "}
              </a>
            </p>
            <p>
              <a
                href="https://zenodo.org/records/14765840"
                target="_blank"
                rel="noopener noreferrer"
              >
                Монографія &quot;Психічне здоров&apos;я та резильєнтність
                особистості. Колективна монографія. За заг. ред. : Г.А. Пріба,
                Л.Є. Бегези. Київ : Ф-ОП Гуляєв О.В., 2025. 392 с.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
