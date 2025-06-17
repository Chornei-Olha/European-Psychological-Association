export default function WhiteSection() {
  return (
    <section
      id="partners"
      className="bg-[#D5E5FF] px-4 md:px-[100px] pt-0 pb-[50px] flex justify-end md:justify-end w-full relative text-white overflow-hidden mx-4 md:mx-0"
    >
      <div className="container mx-auto py-16 px-4 text-black text-left max-w-[1241px]">
        <h2 className="text-[36px] md:text-[56px] text-black mb-[30px] md:mb-[45px] font-inter font-regular">
          Партнери
        </h2>

        <div className="w-full h-[200px] md:w-[1241px] px-10 py-10 md:h-[313px] mb-[30px] md:mb-[45px] bg-[rgba(57,115,225,0.18)] rounded-4xl">
          <h3 className="font-bold pb-2">ОСВІТНІ</h3>
          <p>
            ✔️ Академії праці, соціальних відносин і туризму.
            <br />
            ✔️ Східноукраїнський національний університет імені Володимира Даля
            <br />
            ✔️ Навчально-наукового Інституту психології та соціальних наук
            Міжрегіональної Академії управління персоналом.
            <br />
            ✔️ Навчально-науковий гуманітарний інститут Таврійського
            національного університету імені В.І. Вернадського.
          </p>
        </div>

        <p className="text-[20px] md:text-[33px] font-inter font-regular text-left text-[rgba(0,0,0,0.18)]">
          Документ
        </p>
        <p className="text-[20px] md:text-[33px] font-inter font-regular text-left text-[rgba(0,0,0,0.18)]">
          Політика конфіденційності
        </p>
        <p className="text-[20px] md:text-[33px] font-inter font-regular text-left text-[rgba(0,0,0,0.18)] mb-[30px] md:mb-[45px]">
          Заява шаблон
        </p>
      </div>
    </section>
  );
}
