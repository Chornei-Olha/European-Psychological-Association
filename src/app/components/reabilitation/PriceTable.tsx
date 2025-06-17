export default function PriceTable() {
  return (
    <div className="overflow-x-auto mt-10 px-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-800">
        Вартість послуг (офлайн / онлайн)
      </h2>
      <table className="min-w-full border border-gray-300 text-xs md:text-base bg-white shadow-md rounded-lg overflow-hidden mb-10">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="border px-4 py-3">Послуга</th>
            <th className="border px-4 py-3">Фахівець</th>
            <th className="border px-4 py-3">Кандидат наук</th>
            <th className="border px-4 py-3">Доктор наук</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              Індивідуальна консультація (дорослий / дитина)
            </td>
            <td className="border px-4 py-2">1500 / 50 хвилин</td>
            <td className="border px-4 py-2">1800 / 50 хвилин</td>
            <td className="border px-4 py-2">2000 / 50 хвилин</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Психологічна діагностика</td>
            <td className="border px-4 py-2">2000 / 120 хвилин</td>
            <td className="border px-4 py-2">2300 / 120 хвилин</td>
            <td className="border px-4 py-2">2300 / 120 хвилин</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Сімейна консультація</td>
            <td className="border px-4 py-2">1500 / 50 хвилин</td>
            <td className="border px-4 py-2">1800 / 50 хвилин</td>
            <td className="border px-4 py-2">2000 / 50 хвилин</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Парна консультація</td>
            <td className="border px-4 py-2">1500 / 50 хвилин</td>
            <td className="border px-4 py-2">1800 / 50 хвилин</td>
            <td className="border px-4 py-2">2000 / 50 хвилин</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Корпоративне консультування</td>
            <td className="border px-4 py-2">1200 за 1 особу / 60 хвилин</td>
            <td className="border px-4 py-2">1500 за 1 особу / 60 хвилин</td>
            <td className="border px-4 py-2">1800 за 1 особу / 60 хвилин</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
