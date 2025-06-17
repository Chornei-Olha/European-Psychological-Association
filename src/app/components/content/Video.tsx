import Image from "next/image";

export default function Video() {
  return (
    <section
      id="video"
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
            ВІДЕО{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}
