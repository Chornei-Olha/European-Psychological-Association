import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="w-full text-center bg-[#8da883] text-white py-8 px-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Контактная информация */}
        <div>
          <div
            className={`flex flex-col items-center md:items-start ${spaceGrotesk.className}`}
          >
            <h3 className="text-lg font-semibold mb-4">Kontakte</h3>
            <a
              href="tel:+4368184242756"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mb-2 hover:text-[#1C5107]"
            >
              +4368184242756
            </a>

            <p className="mb-2">Österreich</p>
            <p className="mb-2">Deutschland</p>
          </div>
          <div
            className={`flex flex-col items-center md:items-start ${spaceGrotesk.className} text-[14px]`}
          >
            <a
              href="https://www.daheimbetreut.at/de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1C5107]"
            >
              https://www.daheimbetreut.at/de/impressum
            </a>
            <a
              href="https://www.wko.at/datenschutzerklaerung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1C5107]"
            >
              https://www.wko.at/datenschutzerklaerung
            </a>
            <a
              href="https://www.daheimbetreut.at/de/barrierefreiheit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1C5107]"
            >
              https://www.daheimbetreut.at/de/barrierefreiheit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
