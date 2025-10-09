import { thienCanQuanHe } from '../data/quanHeCanChi';
import { getNguHanhColor } from '../utils/colors';
import { thienCanData } from '../data/thienCan';
import { useState } from 'react';

export const ThienCanQuanHeTable = () => {
  const [expandedCan, setExpandedCan] = useState<string | null>(null);

  const toggleExpand = (can: string, type: string) => {
    const key = `${can}-${type}`;
    setExpandedCan(expandedCan === key ? null : key);
  };

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

      {/* Vòng Tương Sinh & Tương Khắc */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vòng Tương Sinh */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-3xl p-8 shadow-xl border-2 border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-black mb-6 text-green-900 dark:text-green-100 text-center">
            🔄 Vòng Tương Sinh Thiên Can
          </h3>
          <div className="relative aspect-square max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Vòng tròn nền */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-300 dark:text-green-700" strokeDasharray="5,5" />

              {/* Định nghĩa mũi tên */}
              <defs>
                <marker id="arrowgreen" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-green-600" />
                </marker>
              </defs>

              {/* Mũi tên tương sinh - Mộc → Hỏa → Thổ → Kim → Thủy → Mộc */}
              {/* Mộc → Hỏa */}
              <path d="M 235 75 L 275 95" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen)" />

              {/* Hỏa → Thổ */}
              <path d="M 315 140 L 315 255" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen)" />

              {/* Thổ → Kim */}
              <path d="M 275 305 L 130 305" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen)" />

              {/* Kim → Thủy */}
              <path d="M 85 260 L 85 145" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen)" />

              {/* Thủy → Mộc */}
              <path d="M 125 95 L 165 75" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen)" />

              {/* Các ngũ hành - 5 vị trí đều trên vòng tròn */}
              <g className="text-sm font-bold">
                {/* Mộc - trên cùng */}
                <circle cx="200" cy="60" r="38" className="fill-green-500 dark:fill-green-600 stroke-white" strokeWidth="3" />
                <text x="200" y="68" textAnchor="middle" className="fill-white text-lg font-black">Mộc</text>

                {/* Hỏa - phải trên */}
                <circle cx="306" cy="106" r="38" className="fill-red-500 dark:fill-red-600 stroke-white" strokeWidth="3" />
                <text x="306" y="114" textAnchor="middle" className="fill-white text-lg font-black">Hỏa</text>

                {/* Thổ - phải dưới */}
                <circle cx="306" cy="294" r="38" className="fill-yellow-600 dark:fill-yellow-700 stroke-white" strokeWidth="3" />
                <text x="306" y="302" textAnchor="middle" className="fill-white text-lg font-black">Thổ</text>

                {/* Kim - trái dưới */}
                <circle cx="94" cy="294" r="38" className="fill-gray-400 dark:fill-gray-500 stroke-white" strokeWidth="3" />
                <text x="94" y="302" textAnchor="middle" className="fill-white text-lg font-black">Kim</text>

                {/* Thủy - trái trên */}
                <circle cx="94" cy="106" r="38" className="fill-blue-500 dark:fill-blue-600 stroke-white" strokeWidth="3" />
                <text x="94" y="114" textAnchor="middle" className="fill-white text-lg font-black">Thủy</text>
              </g>
            </svg>
          </div>
          <p className="text-center text-sm text-green-800 dark:text-green-200 mt-4 font-semibold">
            Mộc sinh Hỏa → Hỏa sinh Thổ → Thổ sinh Kim → Kim sinh Thủy → Thủy sinh Mộc
          </p>
        </div>

        {/* Vòng Tương Khắc */}
        <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950 rounded-3xl p-8 shadow-xl border-2 border-red-200 dark:border-red-800">
          <h3 className="text-2xl font-black mb-6 text-red-900 dark:text-red-100 text-center">
            ⚔️ Vòng Tương Khắc Thiên Can
          </h3>
          <div className="relative aspect-square max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Vòng tròn nền */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-300 dark:text-red-700" strokeDasharray="5,5" />

              {/* Định nghĩa mũi tên */}
              <defs>
                <marker id="arrowred" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-red-600" />
                </marker>
              </defs>

              {/* Mũi tên tương khắc - Mộc khắc Thổ, Thổ khắc Thủy, Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc */}
              {/* Mộc → Thổ */}
              <path d="M 225 90 L 280 265" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred)" />

              {/* Thổ → Thủy */}
              <path d="M 275 285 L 120 120" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred)" />

              {/* Thủy → Hỏa */}
              <path d="M 125 95 L 275 95" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred)" />

              {/* Hỏa → Kim */}
              <path d="M 285 125 L 110 280" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred)" />

              {/* Kim → Mộc */}
              <path d="M 110 265 L 175 85" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred)" />

              {/* Các ngũ hành - 5 vị trí đều trên vòng tròn */}
              <g className="text-sm font-bold">
                {/* Mộc - trên cùng */}
                <circle cx="200" cy="60" r="38" className="fill-green-500 dark:fill-green-600 stroke-white" strokeWidth="3" />
                <text x="200" y="68" textAnchor="middle" className="fill-white text-lg font-black">Mộc</text>

                {/* Hỏa - phải trên */}
                <circle cx="306" cy="106" r="38" className="fill-red-500 dark:fill-red-600 stroke-white" strokeWidth="3" />
                <text x="306" y="114" textAnchor="middle" className="fill-white text-lg font-black">Hỏa</text>

                {/* Thổ - phải dưới */}
                <circle cx="306" cy="294" r="38" className="fill-yellow-600 dark:fill-yellow-700 stroke-white" strokeWidth="3" />
                <text x="306" y="302" textAnchor="middle" className="fill-white text-lg font-black">Thổ</text>

                {/* Kim - trái dưới */}
                <circle cx="94" cy="294" r="38" className="fill-gray-400 dark:fill-gray-500 stroke-white" strokeWidth="3" />
                <text x="94" y="302" textAnchor="middle" className="fill-white text-lg font-black">Kim</text>

                {/* Thủy - trái trên */}
                <circle cx="94" cy="106" r="38" className="fill-blue-500 dark:fill-blue-600 stroke-white" strokeWidth="3" />
                <text x="94" y="114" textAnchor="middle" className="fill-white text-lg font-black">Thủy</text>
              </g>
            </svg>
          </div>
          <p className="text-center text-sm text-red-800 dark:text-red-200 mt-4 font-semibold">
            Mộc khắc Thổ → Thổ khắc Thủy → Thủy khắc Hỏa → Hỏa khắc Kim → Kim khắc Mộc
          </p>
        </div>
      </div>

      {/* Bảng quan hệ */}
      <div className="overflow-x-auto rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-700">
        <table className="w-full bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="px-6 py-4 text-center font-black text-lg w-48">Thiên Can</th>
              <th className="px-6 py-4 text-center font-black text-lg w-44">Sinh ra ▶</th>
              <th className="px-6 py-4 text-center font-black text-lg w-44">◀ Được sinh</th>
              <th className="px-6 py-4 text-center font-black text-lg w-44">Khắc ⚔</th>
              <th className="px-6 py-4 text-center font-black text-lg w-44">⚔ Bị khắc</th>
              <th className="px-6 py-4 text-center font-black text-lg w-44">⚡ Xung</th>
              <th className="px-6 py-4 text-center font-black text-lg w-48">💫 Hợp</th>
            </tr>
          </thead>
          <tbody>
            {thienCanQuanHe.map((item, index) => {
              const canInfo = thienCanData.find(c => c.can === item.can);
              const colors = canInfo ? getNguHanhColor(canInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };
              const amDuongIcon = canInfo?.cucTinh === 'Dương' ? '➕' : '➖';

              return (
                <>
                  <tr
                    key={item.can}
                    className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    <td className="px-6 py-4 align-middle text-center">
                      <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl font-bold border-2 ${colors.border} w-44 justify-center`}>
                        <span className="text-sm opacity-60">{amDuongIcon}</span>
                        <span className="whitespace-nowrap">{canInfo?.ten || item.can}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.sinh ? (
                        <div className="inline-flex items-center gap-2 justify-center">
                          <span className="text-green-700 dark:text-green-400 font-semibold whitespace-nowrap">
                            {item.sinh}
                          </span>
                          {item.sinhYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'sinh')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-sinh` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.beSinh ? (
                        <div className="inline-flex items-center gap-2 justify-center">
                          <span className="text-blue-700 dark:text-blue-400 font-semibold whitespace-nowrap">
                            {item.beSinh}
                          </span>
                          {item.beSinhYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'beSinh')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-beSinh` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.khac ? (
                        <div className="inline-flex items-center gap-2 justify-center">
                          <span className="text-red-700 dark:text-red-400 font-semibold whitespace-nowrap">
                            {item.khac}
                          </span>
                          {item.khacYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'khac')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-khac` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.beKhac ? (
                        <div className="inline-flex items-center gap-2 justify-center">
                          <span className="text-orange-700 dark:text-orange-400 font-semibold whitespace-nowrap">
                            {item.beKhac}
                          </span>
                          {item.beKhacYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'beKhac')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-beKhac` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.xung ? (
                        <div className="inline-flex items-center gap-2 justify-center">
                          <span className="text-purple-700 dark:text-purple-400 font-bold whitespace-nowrap">
                            {item.xung}
                          </span>
                          {item.xungYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'xung')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-xung` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 align-middle text-center">
                      {item.hop ? (
                        <div className="inline-flex items-center gap-2 justify-center w-full">
                          <div className="flex flex-col gap-1 items-center">
                            <span className="text-pink-700 dark:text-pink-400 font-bold whitespace-nowrap">
                              {item.hop.voi}
                            </span>
                            <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                              → Hóa {item.hop.hoa}
                            </span>
                          </div>
                          {item.hopYNghia && (
                            <button
                              onClick={() => toggleExpand(item.can, 'hop')}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedCan === `${item.can}-hop` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>

                  {/* Expanded rows for meanings */}
                  {expandedCan === `${item.can}-sinh` && item.sinhYNghia && (
                    <tr key={`${item.can}-sinh-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-green-50 dark:bg-green-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
                            📌 Ý nghĩa Sinh ra:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-green-900 dark:text-green-100">
                            {item.sinhYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}

                  {expandedCan === `${item.can}-beSinh` && item.beSinhYNghia && (
                    <tr key={`${item.can}-beSinh-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-blue-50 dark:bg-blue-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                            📌 Ý nghĩa Được sinh:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-blue-900 dark:text-blue-100">
                            {item.beSinhYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}

                  {expandedCan === `${item.can}-khac` && item.khacYNghia && (
                    <tr key={`${item.can}-khac-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-red-50 dark:bg-red-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
                            📌 Ý nghĩa Khắc:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-red-900 dark:text-red-100">
                            {item.khacYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}

                  {expandedCan === `${item.can}-beKhac` && item.beKhacYNghia && (
                    <tr key={`${item.can}-beKhac-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-orange-50 dark:bg-orange-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                            📌 Ý nghĩa Bị khắc:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-orange-900 dark:text-orange-100">
                            {item.beKhacYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}

                  {expandedCan === `${item.can}-xung` && item.xungYNghia && (
                    <tr key={`${item.can}-xung-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-purple-50 dark:bg-purple-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                            📌 Ý nghĩa Xung:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-purple-900 dark:text-purple-100">
                            {item.xungYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}

                  {expandedCan === `${item.can}-hop` && item.hopYNghia && (
                    <tr key={`${item.can}-hop-detail`}>
                      <td colSpan={7} className="px-6 py-4 bg-pink-50 dark:bg-pink-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">
                            📌 Ý nghĩa Hợp:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-pink-900 dark:text-pink-100">
                            {item.hopYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
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
