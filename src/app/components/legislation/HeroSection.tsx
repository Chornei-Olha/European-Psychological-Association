import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#0103B8] pt-[100px] pb-[50px] flex w-full relative text-white overflow-hidden">
      {/* Лого справа */}
      <Image
        src="/assets/vectorR.png"
        alt="Right Logo"
        width={106}
        height={218}
        className="absolute top-1/9 right-0 transform pointer-events-none z-0  opacity-90 md:opacity-100"
      />

      {/* Контент */}
      <div className="text-left space-y-6 md:space-y-8 max-w-full md:max-w-[1241px] px-4 md:px-0 mx-auto z-10">
        <h1 className="text-[36px] md:text-[100px] font-semibold font-inter text-[rgba(255,255,255,0.37)] leading-tight">
          ЗАКОНОДАВСТВО ТА
          <br />
          СПІВРОБІТНИЦТВО
        </h1>

        <h2 className="text-[28px] md:text-[56px] font-regular font-inter">
          Нормативна база
        </h2>

        <div className="text-[16px] md:text-[20px] font-regular font-inter leading-loose space-y-4">
          <div>
            <p className="font-semibold text-white">
              Охорони психічного здоров’я:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Закон №12030 «Про систему охорони психічного здоров’я».</li>
              <li>
                Закон України &quot;Про психіатричну допомогу&quot; (Відомості
                Верховної Ради України (ВВР), 2000, N 19, ст.143)
              </li>
              <li>
                Концепція розвитку охорони психічного здоров’я в Україні на
                період до 2030 року...
              </li>
              <li>
                План заходів із реалізації Концепції розвитку охорони психічного
                здоров’я в Україні
              </li>
              <li>
                Наказ МОЗ №199 — Порядок застосування методів психологічного і
                психотерапевтичного впливу.
              </li>
              <li>
                Порядок проведення психологічної реабілітації постраждалих
                учасників...
              </li>
              <li>
                Положення про психологічну службу у системі освіти України
                (Наказ МОН №509).
              </li>
            </ol>
          </div>

          <div className="pt-6">
            <p className="font-semibold text-white">
              Законодавство, що регулює професійний розвиток:
            </p>
            <ol className="list-decimal pl-5 space-y-2" start={8}>
              <li>
                Стандарти і рекомендації щодо забезпечення якості в ЄПВО (ESG).
              </li>
              <li>
                Закон України «Про освіту», «Про вищу освіту», «Про фахову
                передвищу освіту».
              </li>
              <li>Закон України «Про професійний розвиток працівників».</li>
              <li>
                Порядок підвищення кваліфікації педагогів, постанова КМ №800 від
                21.08.2019.
              </li>
              <li>
                Положення про акредитацію освітніх програм (Наказ МОН №977 від
                11.07.2019).
              </li>
              <li>
                Рекомендації НАЗЯВО щодо внутрішньої системи забезпечення якості
                (протокол №6).
              </li>
              <li>
                Методичні рекомендації для професійного розвитку викладачів
                (Наказ МОН №1341).
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/assets/short_logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="h-auto w-[60vw] md:w-[424px]"
          />
        </div>
      </div>
    </section>
  );
}
