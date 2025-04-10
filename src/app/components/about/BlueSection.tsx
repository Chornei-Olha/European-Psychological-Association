"use client";

import Image from "next/image";

export default function BlueSection() {
  return (
    <>
      <section className="pb-[50px]">
        <div className="bg-[#0103B8] mx-[20px] py-12 px-4 rounded-[20px]">
          <div className="flex items-center justify-between mt-[48px]">
            <h2 className="text-[56px] font-inter font-regular text-white ml-[100px]">
              Бачення
            </h2>
            <Image
              src="/assets/Vector2.png"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>
          <div className="container flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex flex-col">
              <p className="text-[20px] font-inter font-regular text-white mt-[20px] ml-[100px] w-6/7">
                Європейська психологічна асоціація просуває якісні психологічні
                знання та сучасну освіту, крокуючи до інновацій, співпраці та
                відкритості знань.
              </p>
              <div>
                <p className="text-[20px] font-inter font-regular text-black text-center w-[115px] mt-[80px] ml-[100px] border rounded-4xl p-[6px] bg-white">
                  Візія
                </p>
              </div>

              <p className="text-[20px] font-inter font-regular text-white mt-[20px] ml-[100px]">
                Професійний світ, в якому ніхто не буде відчувати нестачу
                психологічних знань
              </p>
              <div>
                <p className="text-[20px] font-inter font-regular text-black text-center w-[115px] mt-[80px] ml-[100px] border rounded-4xl p-[6px] bg-white">
                  Місія
                </p>
              </div>
              <p className="text-[20px] font-inter font-regular text-white mt-[20px] ml-[100px]">
                Місія Європейської психологічної асоціації полягає в тому, щоб
                значущо вплинути на освіту в Україні, надаючи сучасні
                психологічні та управлінські знання, які змінюють кожного.
                Європейська психологічна асоціація прискорює особистісне
                зростання та управлінський досвід через інноваційні навчальні
                техніки базовані на європейських стандартах якості надання
                психологічних та освітніх послуг. Члени Європейської
                психологічної асоціації отримують індивідуальне наставництво від
                експертів в галузі психології та управління. Ми допомагаємо
                фахівцям бути в курсі тенденцій сучасних психологічних знань та
                управління через доступ до освітніх проектів Європейської
                психологічної асоціації, які об’єднують співтовариство
                професіональних психологів та управлінців.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-[20px]">
          {" "}
          <div>
            <p className="text-[20px] font-inter font-regular text-white text-center w-[115px] mt-[80px] ml-[100px] border rounded-4xl p-[6px] bg-[#0103B8]">
              Мета
            </p>
          </div>
          <p className="text-[20px] font-inter font-regular text-black mt-[20px] ml-[100px]">
            Сприяння реалізації творчого потенціалу особистості фахівця з метою
            вирішення актуальних теоретичних, практичних та наукових проблем в
            сфері психології на європейському, національному та міжнародному
            рівнях
          </p>
        </div>
      </section>
    </>
  );
}
