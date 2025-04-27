"use client";

import Image from "next/image";

export default function BlueSection() {
  return (
    <section className="pb-[50px] w-full px-4 sm:px-0">
      <div className="bg-[#0103B8] mx-auto sm:mx-[20px] py-10 sm:py-12 rounded-[20px] relative overflow-hidden">
        <Image
          src="/assets/Vector2.png"
          alt="Logo"
          width={120}
          height={120}
          className="absolute right-4 sm:right-[50px] top-4 sm:top-auto w-[60px] h-[60px] sm:w-[120px] sm:h-[120px]"
        />

        <div className="max-w-[1241px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-[24px] sm:mt-[48px] px-4 sm:px-0">
            <h2 className="text-[32px] sm:text-[56px] font-inter font-regular text-white">
              Бачення
            </h2>
          </div>

          <div className="flex flex-col px-4 sm:px-0">
            <p className="text-[16px] sm:text-[20px] font-inter font-regular text-white mt-[16px] sm:mt-[20px] leading-relaxed">
              Європейська психологічна асоціація просуває якісні психологічні
              знання та сучасну освіту, крокуючи до інновацій, співпраці та
              відкритості знань.
            </p>

            <p
              id="vision"
              className="text-[16px] sm:text-[20px] font-inter font-regular text-black text-left w-fit px-4 py-2 mt-[40px] sm:mt-[80px] border rounded-3xl bg-white"
            >
              Візія
            </p>

            <p className="text-[16px] sm:text-[20px] font-inter font-regular text-white mt-[16px] sm:mt-[20px] leading-relaxed">
              Професійний світ, в якому ніхто не буде відчувати нестачу
              психологічних знань
            </p>

            <p
              id="mision"
              className="text-[16px] sm:text-[20px] font-inter font-regular text-black text-left w-fit px-4 py-2 mt-[40px] sm:mt-[80px] border rounded-3xl bg-white"
            >
              Місія
            </p>

            <p className="text-[16px] sm:text-[20px] font-inter font-regular text-white mt-[16px] sm:mt-[20px] leading-relaxed">
              Місія Європейської психологічної асоціації полягає в тому, щоб
              значущо вплинути на освіту в Україні, надаючи сучасні психологічні
              та управлінські знання, які змінюють кожного.
              <br />
              Європейська психологічна асоціація прискорює особистісне зростання
              та управлінський досвід через інноваційні навчальні техніки
              базовані на європейських стандартах якості надання психологічних
              та освітніх послуг.
              <br />
              Члени Європейської психологічної асоціації отримують індивідуальне
              наставництво від експертів в галузі психології та управління.
              <br />
              Ми допомагаємо фахівцям бути в курсі тенденцій сучасних
              психологічних знань та управління через доступ до освітніх
              проектів Європейської психологічної асоціації, які об’єднують
              співтовариство професіональних психологів та управлінців.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1241px] mx-auto mt-[40px] sm:mt-[80px] px-4 sm:px-0">
        <p
          id="goal"
          className="text-[16px] sm:text-[20px] font-inter font-regular text-white text-left w-fit px-4 py-2 border rounded-3xl bg-[#0103B8]"
        >
          Мета
        </p>

        <p className="text-[16px] sm:text-[20px] font-inter font-regular text-black mt-[16px] sm:mt-[20px] leading-relaxed">
          Сприяння реалізації творчого потенціалу особистості фахівця з метою
          вирішення актуальних теоретичних, практичних та наукових проблем в
          сфері психології на європейському, національному та міжнародному
          рівнях
        </p>
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/11aX-MAW0HVE_cg8rgmYBg538B_rl2rkL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-black hover:bg-blue-700 text-white font-reem transition w-fit mt-6 mb-6 md:mt-[50px] md:mb-[50px] text-center"
          >
            Документи
          </a>
        </div>
      </div>
    </section>
  );
}
