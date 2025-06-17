"use client";

// import { useState } from "react";
// import Image from "next/image";

export default function EducationSection() {
  // const [modalContent, setModalContent] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (text: string) => {
  //   setModalContent(text);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="w-full bg-[#BFD6EC]">
      {/* МОДАЛКА */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center">
          <div className="bg-white border border-[#09234B] rounded-xl p-6 max-w-lg w-[90%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl text-black"
            >
              ✕
            </button>
            <p className="text-[#09234B] font-inter text-[16px] whitespace-pre-line">
              {modalContent}
            </p>
          </div>
        </div>
      )} */}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-[#09234B]">
          <div className="text-base sm:text-[26px] text-black mb-8 font-inter font-600 text-left space-y-4">
            <p>
              Розроблені щоб допомогти Вам отримати правильні дорожні карти й
              інструменти для створення успішної кар’єри.
            </p>
            <p>
              Заняття допоможуть Вам зосередитися на довготривалому зростанні та
              створені сталих практик у Вашій діяльності.
            </p>
            <p>
              Якщо Ви шукаєте якісне джерело знань та бажаєте створити цінність,
              яка буде залучати потрібних Вам людей – сертифікаційні програми це
              навчання, яке пропонує Вам першокласну освіту та затребувані
              навички та практичні чек-листи, які Ви можете почати
              використовувати одразу.
            </p>
          </div>

          <h2
            id="program1"
            className="text-3xl sm:text-[56px] text-black mb-8 mt-8 sm:mt-[87px] font-dm font-medium text-center"
          >
            Сертифікаційні програми
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1241px]">
            {/* КАРТОЧКА 1 */}
            <div className="flex gap-4 mt-4 flex-col w-full">
              <div className="bg-[#F4F4F4] rounded-xl p-2 text-[16px] font-inter text-[#09234B] relative min-h-[300px]">
                <p className="font-bold text-xl">
                  Інтенсив - відповідь на виклики життя
                </p>
                <p className="font-bold text-lg py-5">1 місяць</p>
                <p>
                  Дозволяє поєднати працю та навчання. Передбачає отримання
                  базового обсягу компетенцій та навичок у стислий термін. Дає
                  можливість спрямувати зусилля, час та фінанси в інтервенції із
                  заздалегідь високою результативністю.
                </p>
              </div>

              <div className="bg-[#F4F4F4] rounded-xl p-2 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                <p className="text-[16px] text-center">120 годин</p>
                <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                  4 кредити ECTS
                </button>
              </div>
            </div>

            {/* КАРТОЧКА 2 */}
            <div className="flex gap-4 mt-4 flex-col w-full">
              <div className="bg-[#F4F4F4] rounded-xl p-2 text-[16px] font-inter text-[#09234B] relative min-h-[300px]">
                <p className="font-bold text-xl">
                  Активна особистість - цікаве та прогресивне сьогодення
                </p>
                <p className="font-bold text-lg py-5">3 місяці</p>
                <p>
                  Спрямована на фахівців, які впроваджують у роботу отримані
                  знання за принципом «тут та зараз».
                </p>
              </div>

              <div className="bg-[#F4F4F4] rounded-xl p-2 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                <p className="text-[16px] text-center">240 годин</p>
                <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                  8 кредитів ECTS
                </button>
              </div>
            </div>

            {/* КАРТОЧКА 3 */}
            <div className="flex gap-4 mt-4 flex-col w-full">
              <div className="bg-[#F4F4F4] rounded-xl p-2 text-[16px] font-inter text-[#09234B] relative min-h-[300px]">
                <p className="font-bold text-xl">
                  Сталий професійний розвиток - впевнене майбутнє життя
                </p>
                <p className="font-bold text-lg py-5">10 місяців</p>
                <p>
                  Уможливлює досягнення нового рівня у діяльності або
                  започаткування кар&apos;єри «з нуля».
                </p>
              </div>

              <div className="bg-[#F4F4F4] rounded-xl p-2 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                <p className="text-[16px] text-center">360 годин</p>
                <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                  12 кредитів ECTS
                </button>
              </div>
            </div>
          </div>

          {/* Доп. инфо блок */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 mt-[50px]">
              <h3 className="text-2xl font-bold text-left sm:text-xl">
                Структура програм
              </h3>
              <p className="text-base font-medium text-left sm:text-sm">
                Забезпечує довготривале зростання та сталі практики створення
                цінностей у Вашій діяльності, що залучатиме та приваблюватиме до
                Вас людей.
              </p>
              <a
                href="https://forms.gle/yzcFrVAxVBg7NrDD7"
                target="_blank"
                rel="noopener noreferrer"
                id="program2"
              >
                <button className="bg-black text-white py-2 px-6 rounded-full mt-[50px] flex items-center justify-center">
                  Реєстрація <span className="ml-2">→</span>
                </button>
              </a>
            </div>
          </div>
          <h2 className="text-3xl sm:text-[56px] text-black mb-8 mt-8 sm:mt-[87px] font-dm font-medium text-center">
            Тренінгові програми
          </h2>
          <div className="text-base sm:text-[26px] text-black mb-8 font-inter font-600 text-left space-y-4">
            <p>
              Тренінговий формат, ґрунтується на ефективних формах опанування
              знань та інноваційних інструментах, що застосовуються для
              вдосконалення навичок і формування необхідних умінь. Тренінги
              забезпечують опанування найкращими практиками та актуальними
              знаннями у сфері психології. Тренінги відбуваються у формах офлайн
              та онлайн.
            </p>

            <h2
              id="program3"
              className="text-3xl sm:text-[56px] text-black mb-8 mt-8 sm:mt-[87px] font-dm font-medium text-center"
            >
              Семінари
            </h2>
            <p>
              Семінар орієнтовані на професійну аудиторію, де під час занять
              учасники обмінюються досвідом та інформацією, покращують
              кваліфікацію та освоюють нові навички. Участь у семінарах підвищує
              ефективність слухачів. Семінари з психології управління
              забезпечують консолідацію професійної спільноти, обміну досвідом
              та координації взаємодії у бізнесі. Беручи участь у семінарах,
              слухачі в стислий термін набувають затребуваних навичок. Семінари
              відбуваються у формах офлайн та онлайн.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
