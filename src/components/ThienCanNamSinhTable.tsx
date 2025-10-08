import { thienCanData, namSinhToThienCan } from '../data/thienCan';
import { getNguHanhColor } from '../utils/colors';

export const ThienCanNamSinhTable = () => {
  return (
    <div className="space-y-8">
      {/* Giới thiệu */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-3xl p-8 shadow-xl border-2 border-emerald-200 dark:border-emerald-800">
        <h2 className="text-3xl font-black mb-4 text-emerald-900 dark:text-emerald-100">
          🔍 Tra Cứu Thiên Can Theo Năm Sinh
        </h2>
        <p className="text-lg text-emerald-800 dark:text-emerald-200 leading-relaxed mb-4">
          Để tìm <strong>Thiên Can</strong> của năm sinh, chỉ cần lấy <strong>chữ số cuối</strong> của năm sinh và tra bảng dưới đây.
        </p>
        <div className="bg-emerald-100 dark:bg-emerald-900 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-700">
          <p className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">📝 Ví dụ:</p>
          <ul className="list-disc list-inside space-y-1 text-emerald-800 dark:text-emerald-200">
            <li>Năm <strong>1994</strong> → Số cuối <strong>4</strong> → <strong>Giáp Mộc</strong></li>
            <li>Năm <strong>2000</strong> → Số cuối <strong>0</strong> → <strong>Canh Kim</strong></li>
            <li>Năm <strong>2023</strong> → Số cuối <strong>3</strong> → <strong>Quý Thủy</strong></li>
          </ul>
        </div>
      </div>

      {/* Bảng tra cứu nhanh */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-indigo-200 dark:border-indigo-800 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">📊 Bảng Tra Cứu Nhanh</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {Object.entries(namSinhToThienCan).map(([soCuoi, thienCan]) => {
              const canInfo = thienCanData.find(c => c.can === thienCan);
              const colors = canInfo ? getNguHanhColor(canInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };

              return (
                <div
                  key={soCuoi}
                  className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 text-center transition-all hover:scale-105 hover:shadow-lg`}
                >
                  <div className={`text-4xl font-black mb-2 ${colors.text}`}>{soCuoi}</div>
                  <div className={`text-xs mb-1 ${colors.text} opacity-75`}>Số cuối</div>
                  <div className={`text-xl font-bold ${colors.text}`}>{canInfo?.can}</div>
                  <div className={`text-sm mt-1 ${colors.text} opacity-90`}>{canInfo?.nguHanh}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bảng chi tiết với số lượng */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-purple-200 dark:border-purple-800 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">📋 Chi Tiết 10 Thiên Can</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-950">
                <th className="px-6 py-4 text-left font-black text-lg text-purple-900 dark:text-purple-100">Thiên Can</th>
                <th className="px-6 py-4 text-left font-black text-lg text-purple-900 dark:text-purple-100">Ngũ Hành</th>
                <th className="px-6 py-4 text-center font-black text-lg text-purple-900 dark:text-purple-100">Số cuối năm sinh</th>
                <th className="px-6 py-4 text-left font-black text-lg text-purple-900 dark:text-purple-100">Hình ảnh</th>
                <th className="px-6 py-4 text-left font-black text-lg text-purple-900 dark:text-purple-100">Cục tính</th>
              </tr>
            </thead>
            <tbody>
              {thienCanData.map((can, index) => {
                const colors = getNguHanhColor(can.nguHanh);

                return (
                  <tr
                    key={can.can}
                    className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-xl font-bold border-2 ${colors.border}`}>
                        <span className={`${colors.text} drop-shadow-sm`}>{can.ten}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center ${colors.bg} ${colors.text} px-3 py-1 rounded-lg font-bold text-base border ${colors.border}`}>
                        {can.nguHanh}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-300 dark:border-indigo-700">
                        <span className="text-2xl font-black text-indigo-700 dark:text-indigo-300">
                          {can.namSinhCuoi}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        {can.hinhAnh}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        can.cucTinh === 'Dương'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
                      }`}>
                        {can.cucTinh}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bảng tổng hợp theo Ngũ Hành */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-cyan-200 dark:border-cyan-800 overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">🌟 Tổng Hợp Theo Ngũ Hành</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kim */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-300 dark:border-gray-700">
              <h4 className="font-black text-xl text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                ⚪ Kim (x2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-gray-900 dark:text-gray-100">Canh Kim</span>
                  <span className="text-2xl font-black text-gray-700 dark:text-gray-300">0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-gray-900 dark:text-gray-100">Tân Kim</span>
                  <span className="text-2xl font-black text-gray-700 dark:text-gray-300">1</span>
                </div>
              </div>
            </div>

            {/* Thủy */}
            <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-black text-xl text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
                💧 Thủy (x2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-blue-900 dark:text-blue-100">Nhâm Thủy</span>
                  <span className="text-2xl font-black text-blue-700 dark:text-blue-300">2</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-blue-900 dark:text-blue-100">Quý Thủy</span>
                  <span className="text-2xl font-black text-blue-700 dark:text-blue-300">3</span>
                </div>
              </div>
            </div>

            {/* Mộc */}
            <div className="bg-green-50 dark:bg-green-950 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700">
              <h4 className="font-black text-xl text-green-700 dark:text-green-300 mb-4 flex items-center gap-2">
                🌳 Mộc (x2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-green-900 dark:text-green-100">Giáp Mộc</span>
                  <span className="text-2xl font-black text-green-700 dark:text-green-300">4</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-green-900 dark:text-green-100">Ất Mộc</span>
                  <span className="text-2xl font-black text-green-700 dark:text-green-300">5</span>
                </div>
              </div>
            </div>

            {/* Hỏa */}
            <div className="bg-red-50 dark:bg-red-950 rounded-2xl p-6 border-2 border-red-300 dark:border-red-700">
              <h4 className="font-black text-xl text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                🔥 Hỏa (x2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-red-900 dark:text-red-100">Bính Hỏa</span>
                  <span className="text-2xl font-black text-red-700 dark:text-red-300">6</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-red-900 dark:text-red-100">Đinh Hỏa</span>
                  <span className="text-2xl font-black text-red-700 dark:text-red-300">7</span>
                </div>
              </div>
            </div>

            {/* Thổ */}
            <div className="bg-yellow-50 dark:bg-yellow-950 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-700">
              <h4 className="font-black text-xl text-yellow-700 dark:text-yellow-300 mb-4 flex items-center gap-2">
                🟡 Thổ (x2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-yellow-900 dark:text-yellow-100">Mậu Thổ</span>
                  <span className="text-2xl font-black text-yellow-700 dark:text-yellow-300">8</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl">
                  <span className="font-bold text-yellow-900 dark:text-yellow-100">Kỷ Thổ</span>
                  <span className="text-2xl font-black text-yellow-700 dark:text-yellow-300">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chú thích */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 rounded-3xl p-8 shadow-xl border-2 border-slate-200 dark:border-slate-800">
        <h3 className="font-black text-xl text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          💡 Lưu ý
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Mỗi <strong>Ngũ Hành</strong> có 2 Thiên Can: 1 Dương và 1 Âm</li>
          <li><strong>Dương Can</strong>: Canh (0), Nhâm (2), Giáp (4), Bính (6), Mậu (8)</li>
          <li><strong>Âm Can</strong>: Tân (1), Quý (3), Ất (5), Đinh (7), Kỷ (9)</li>
          <li>Cứ 10 năm lại lặp lại 1 chu kỳ Thiên Can</li>
        </ul>
      </div>
    </div>
  );
};
