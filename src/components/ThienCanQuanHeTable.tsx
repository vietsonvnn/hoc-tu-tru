import { thienCanQuanHe } from '../data/quanHeCanChi';
import { getNguHanhColor } from '../utils/colors';
import { thienCanData } from '../data/thienCan';

export const ThienCanQuanHeTable = () => {

  return (
    <div className="space-y-8">
      {/* Giới thiệu */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-3xl p-8 shadow-xl border-2 border-indigo-200 dark:border-indigo-800">
        <h2 className="text-3xl font-black mb-4 text-indigo-900 dark:text-indigo-100">
          ☯ Quan Hệ Thiên Can
        </h2>
        <p className="text-lg text-indigo-800 dark:text-indigo-200 leading-relaxed">
          10 Thiên Can có các mối quan hệ phức tạp với nhau: <strong>Tương Sinh</strong> (sinh ra),
          <strong> Tương Khắc</strong> (khắc chế), <strong>Tương Xung</strong> (đối lập), và
          <strong> Tương Hợp</strong> (hòa hợp hóa thành ngũ hành khác).
        </p>
      </div>

      {/* Bảng quan hệ */}
      <div className="overflow-x-auto rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-700">
        <table className="w-full bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="px-6 py-4 text-left font-black text-lg">Thiên Can</th>
              <th className="px-6 py-4 text-left font-black text-lg">Sinh ra ▶</th>
              <th className="px-6 py-4 text-left font-black text-lg">◀ Được sinh</th>
              <th className="px-6 py-4 text-left font-black text-lg">Khắc ⚔</th>
              <th className="px-6 py-4 text-left font-black text-lg">⚔ Bị khắc</th>
              <th className="px-6 py-4 text-left font-black text-lg">⚡ Xung</th>
              <th className="px-6 py-4 text-left font-black text-lg">💫 Hợp</th>
            </tr>
          </thead>
          <tbody>
            {thienCanQuanHe.map((item, index) => {
              const canInfo = thienCanData.find(c => c.can === item.can);
              const colors = canInfo ? getNguHanhColor(canInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };

              return (
                <tr
                  key={item.can}
                  className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl font-bold border-2 ${colors.border}`}>
                      {canInfo?.cucTinh === 'Dương' ? '☯' : '☯'} {canInfo?.ten || item.can}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 dark:text-green-400 font-semibold">
                      {item.sinh || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-700 dark:text-blue-400 font-semibold">
                      {item.beSinh || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-700 dark:text-red-400 font-semibold">
                      {item.khac || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-orange-700 dark:text-orange-400 font-semibold">
                      {item.beKhac || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.xung ? (
                      <span className="text-purple-700 dark:text-purple-400 font-bold">
                        {item.xung}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {item.hop ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-pink-700 dark:text-pink-400 font-bold">
                          {item.hop.voi}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          → Hóa {item.hop.hoa}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Chú thích */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-50 dark:bg-green-950 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700">
          <h3 className="font-black text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
            <span>▶</span> Sinh ra
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300">
            Thiên Can này sinh ra những ngũ hành nào
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700">
          <h3 className="font-black text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <span>◀</span> Được sinh
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Thiên Can này được sinh bởi những ngũ hành nào
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-950 rounded-2xl p-6 border-2 border-red-300 dark:border-red-700">
          <h3 className="font-black text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
            <span>⚔</span> Khắc
          </h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            Thiên Can này khắc chế những ngũ hành nào
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-700">
          <h3 className="font-black text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
            <span>⚔</span> Bị khắc
          </h3>
          <p className="text-sm text-orange-700 dark:text-orange-300">
            Thiên Can này bị khắc bởi những ngũ hành nào
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700">
          <h3 className="font-black text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
            <span>⚡</span> Xung
          </h3>
          <p className="text-sm text-purple-700 dark:text-purple-300">
            Quan hệ đối lập, xung khắc mạnh mẽ
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 rounded-2xl p-6 border-2 border-pink-300 dark:border-pink-700">
          <h3 className="font-black text-pink-800 dark:text-pink-200 mb-2 flex items-center gap-2">
            <span>💫</span> Hợp
          </h3>
          <p className="text-sm text-pink-700 dark:text-pink-300">
            Kết hợp hài hòa, hóa thành ngũ hành mới
          </p>
        </div>
      </div>
    </div>
  );
};
