import { diaChiQuanHe } from '../data/quanHeCanChi';
import { diaChiData } from '../data/diaChi';
import { getNguHanhColor } from '../utils/colors';
import { useState } from 'react';

const chiIcons: Record<string, string> = {
  Tý: '🐭',
  Sửu: '🐂',
  Dần: '🐅',
  Mão: '🐈',
  Thìn: '🐉',
  Tị: '🐍',
  Ngọ: '🐴',
  Mùi: '🐑',
  Thân: '🐵',
  Dậu: '🐓',
  Tuất: '🐕',
  Hợi: '🐖',
};

export const DiaChiQuanHeTable = () => {
  const [expandedChi, setExpandedChi] = useState<string | null>(null);

  const toggleExpand = (chi: string) => {
    setExpandedChi(expandedChi === chi ? null : chi);
  };
  return (
    <div className="space-y-8">
      {/* Giới thiệu */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-3xl p-8 shadow-xl border-2 border-amber-200 dark:border-amber-800">
        <h2 className="text-3xl font-black mb-4 text-amber-900 dark:text-amber-100">
          🐉 Quan Hệ Địa Chi
        </h2>
        <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
          12 Địa Chi có các mối quan hệ phức tạp: <strong>Lục Hợp</strong> (6 cặp hài hòa),
          <strong> Lục Xung</strong> (6 cặp đối lập), <strong>Tam Hợp</strong> (4 bộ 3 hài hòa),
          <strong> Tam Hội</strong> (4 bộ 3 theo mùa), <strong>Tương Hình</strong> (tự hình),
          <strong> Lục Hại</strong> (6 cặp gây hại), và <strong>Lục Phá</strong> (6 cặp phá hoại).
        </p>
      </div>

      {/* Vòng Tương Sinh & Tương Khắc Địa Chi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vòng Tương Sinh */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-3xl p-8 shadow-xl border-2 border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-black mb-6 text-green-900 dark:text-green-100 text-center">
            🔄 Vòng Tương Sinh Địa Chi
          </h3>
          <div className="relative aspect-square max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Vòng tròn nền */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-300 dark:text-green-700" strokeDasharray="5,5" />

              {/* Định nghĩa mũi tên */}
              <defs>
                <marker id="arrowgreen-dc" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-green-600" />
                </marker>
              </defs>

              {/* Mũi tên tương sinh - Dần → Ngọ → Tuất → Thân → Tý → Dần */}
              {/* Dần → Ngọ */}
              <path d="M 235 75 L 275 95" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen-dc)" />

              {/* Ngọ → Tuất */}
              <path d="M 315 140 L 315 255" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen-dc)" />

              {/* Tuất → Thân */}
              <path d="M 275 305 L 130 305" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen-dc)" />

              {/* Thân → Tý */}
              <path d="M 85 260 L 85 145" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen-dc)" />

              {/* Tý → Dần */}
              <path d="M 125 95 L 165 75" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-600" markerEnd="url(#arrowgreen-dc)" />

              {/* Các địa chi đại diện cho ngũ hành */}
              <g className="text-sm font-bold">
                {/* Dần (Mộc) - trên cùng */}
                <circle cx="200" cy="60" r="42" className="fill-green-500 dark:fill-green-600 stroke-white" strokeWidth="3" />
                <text x="200" y="55" textAnchor="middle" className="fill-white text-2xl">🐅</text>
                <text x="200" y="75" textAnchor="middle" className="fill-white text-xs font-black">Dần</text>

                {/* Ngọ (Hỏa) - phải trên */}
                <circle cx="306" cy="106" r="42" className="fill-red-500 dark:fill-red-600 stroke-white" strokeWidth="3" />
                <text x="306" y="101" textAnchor="middle" className="fill-white text-2xl">🐴</text>
                <text x="306" y="121" textAnchor="middle" className="fill-white text-xs font-black">Ngọ</text>

                {/* Tuất (Thổ) - phải dưới */}
                <circle cx="306" cy="294" r="42" className="fill-yellow-600 dark:fill-yellow-700 stroke-white" strokeWidth="3" />
                <text x="306" y="289" textAnchor="middle" className="fill-white text-2xl">🐕</text>
                <text x="306" y="309" textAnchor="middle" className="fill-white text-xs font-black">Tuất</text>

                {/* Thân (Kim) - trái dưới */}
                <circle cx="94" cy="294" r="42" className="fill-gray-400 dark:fill-gray-500 stroke-white" strokeWidth="3" />
                <text x="94" y="289" textAnchor="middle" className="fill-white text-2xl">🐵</text>
                <text x="94" y="309" textAnchor="middle" className="fill-white text-xs font-black">Thân</text>

                {/* Tý (Thủy) - trái trên */}
                <circle cx="94" cy="106" r="42" className="fill-blue-500 dark:fill-blue-600 stroke-white" strokeWidth="3" />
                <text x="94" y="101" textAnchor="middle" className="fill-white text-2xl">🐭</text>
                <text x="94" y="121" textAnchor="middle" className="fill-white text-xs font-black">Tý</text>
              </g>
            </svg>
          </div>
          <p className="text-center text-sm text-green-800 dark:text-green-200 mt-4 font-semibold">
            Dần sinh Ngọ → Ngọ sinh Tuất → Tuất sinh Thân → Thân sinh Tý → Tý sinh Dần
          </p>
        </div>

        {/* Vòng Tương Khắc */}
        <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950 rounded-3xl p-8 shadow-xl border-2 border-red-200 dark:border-red-800">
          <h3 className="text-2xl font-black mb-6 text-red-900 dark:text-red-100 text-center">
            ⚔️ Vòng Tương Khắc Địa Chi
          </h3>
          <div className="relative aspect-square max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Vòng tròn nền */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-300 dark:text-red-700" strokeDasharray="5,5" />

              {/* Định nghĩa mũi tên */}
              <defs>
                <marker id="arrowred-dc" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-red-600" />
                </marker>
              </defs>

              {/* Mũi tên tương khắc - Dần khắc Tuất, Tuất khắc Tý, Tý khắc Ngọ, Ngọ khắc Thân, Thân khắc Dần */}
              {/* Dần → Tuất */}
              <path d="M 225 90 L 280 265" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred-dc)" />

              {/* Tuất → Tý */}
              <path d="M 275 285 L 120 120" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred-dc)" />

              {/* Tý → Ngọ */}
              <path d="M 125 95 L 275 95" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred-dc)" />

              {/* Ngọ → Thân */}
              <path d="M 285 125 L 110 280" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred-dc)" />

              {/* Thân → Dần */}
              <path d="M 110 265 L 175 85" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600" markerEnd="url(#arrowred-dc)" />

              {/* Các địa chi đại diện cho ngũ hành */}
              <g className="text-sm font-bold">
                {/* Dần (Mộc) - trên cùng */}
                <circle cx="200" cy="60" r="42" className="fill-green-500 dark:fill-green-600 stroke-white" strokeWidth="3" />
                <text x="200" y="55" textAnchor="middle" className="fill-white text-2xl">🐅</text>
                <text x="200" y="75" textAnchor="middle" className="fill-white text-xs font-black">Dần</text>

                {/* Ngọ (Hỏa) - phải trên */}
                <circle cx="306" cy="106" r="42" className="fill-red-500 dark:fill-red-600 stroke-white" strokeWidth="3" />
                <text x="306" y="101" textAnchor="middle" className="fill-white text-2xl">🐴</text>
                <text x="306" y="121" textAnchor="middle" className="fill-white text-xs font-black">Ngọ</text>

                {/* Tuất (Thổ) - phải dưới */}
                <circle cx="306" cy="294" r="42" className="fill-yellow-600 dark:fill-yellow-700 stroke-white" strokeWidth="3" />
                <text x="306" y="289" textAnchor="middle" className="fill-white text-2xl">🐕</text>
                <text x="306" y="309" textAnchor="middle" className="fill-white text-xs font-black">Tuất</text>

                {/* Thân (Kim) - trái dưới */}
                <circle cx="94" cy="294" r="42" className="fill-gray-400 dark:fill-gray-500 stroke-white" strokeWidth="3" />
                <text x="94" y="289" textAnchor="middle" className="fill-white text-2xl">🐵</text>
                <text x="94" y="309" textAnchor="middle" className="fill-white text-xs font-black">Thân</text>

                {/* Tý (Thủy) - trái trên */}
                <circle cx="94" cy="106" r="42" className="fill-blue-500 dark:fill-blue-600 stroke-white" strokeWidth="3" />
                <text x="94" y="101" textAnchor="middle" className="fill-white text-2xl">🐭</text>
                <text x="94" y="121" textAnchor="middle" className="fill-white text-xs font-black">Tý</text>
              </g>
            </svg>
          </div>
          <p className="text-center text-sm text-red-800 dark:text-red-200 mt-4 font-semibold">
            Dần khắc Tuất → Tuất khắc Tý → Tý khắc Ngọ → Ngọ khắc Thân → Thân khắc Dần
          </p>
        </div>
      </div>

      {/* Bảng Lục Hợp và Lục Xung */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-blue-200 dark:border-blue-800 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">💫 Lục Hợp & ⚡ Lục Xung</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-950">
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-64">Địa Chi</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-48">💫 Lục Hợp</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-48">⚡ Lục Xung</th>
              </tr>
            </thead>
            <tbody>
              {diaChiQuanHe.map((item, index) => {
                const chiInfo = diaChiData.find(c => c.chi === item.chi);
                const colors = chiInfo ? getNguHanhColor(chiInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };

                return (
                  <>
                  <tr
                    key={item.chi}
                    className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    <td className="px-6 py-4 align-middle text-center">
                      <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl font-bold border-2 ${colors.border} w-56 justify-center`}>
                        <span>{chiIcons[item.chi]}</span>
                        <span className="text-sm opacity-60">{chiInfo?.cucTinh === 'Dương' ? '➕' : '➖'}</span>
                        <span className="whitespace-nowrap">{chiInfo?.ten || item.chi}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.lucHop ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-blue-900 dark:text-blue-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.lucHop.voi]}</span>
                            {item.lucHop.voi}
                          </span>
                          <span className="text-xs text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            → Hóa {item.lucHop.hoa}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.xung ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-red-900 dark:text-red-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.xung]}</span>
                            {item.xung}
                          </span>
                          {item.xungYNghia && (
                            <button
                              onClick={() => toggleExpand(`xung-${item.chi}`)}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedChi === `xung-${item.chi}` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                  {expandedChi === `xung-${item.chi}` && item.xungYNghia && (
                    <tr key={`${item.chi}-xung-detail`}>
                      <td colSpan={3} className="px-6 py-4 bg-red-50 dark:bg-red-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
                            📌 Ý nghĩa Lục Xung {item.chi} - {item.xung}:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-red-900 dark:text-red-100">
                            {item.xungYNghia.map((y, idx) => (
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
      </div>

      {/* Bảng Tam Hợp và Tam Hội */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-purple-200 dark:border-purple-800 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">🔮 Tam Hợp & 🌸 Tam Hội</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-950">
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-64">Địa Chi</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-56">🔮 Tam Hợp</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-56">🌸 Tam Hội</th>
              </tr>
            </thead>
            <tbody>
              {diaChiQuanHe.map((item, index) => {
                const chiInfo = diaChiData.find(c => c.chi === item.chi);
                const colors = chiInfo ? getNguHanhColor(chiInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };

                return (
                  <tr
                    key={item.chi}
                    className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    <td className="px-6 py-4 align-middle text-center">
                      <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl font-bold border-2 ${colors.border} w-56 justify-center`}>
                        <span>{chiIcons[item.chi]}</span>
                        <span className="text-sm opacity-60">{chiInfo?.cucTinh === 'Dương' ? '➕' : '➖'}</span>
                        <span className="whitespace-nowrap">{chiInfo?.ten || item.chi}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.tamHop ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-purple-900 dark:text-purple-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.tamHop.chi1]}</span>
                            {item.tamHop.chi1}
                            <span className="text-gray-400">+</span>
                            <span>{chiIcons[item.tamHop.chi2]}</span>
                            {item.tamHop.chi2}
                          </span>
                          <span className="text-xs text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            → Hóa {item.tamHop.hoa}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.tamHoi ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-pink-900 dark:text-pink-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.tamHoi.chi1]}</span>
                            {item.tamHoi.chi1}
                            <span className="text-gray-400">+</span>
                            <span>{chiIcons[item.tamHoi.chi2]}</span>
                            {item.tamHoi.chi2}
                          </span>
                          <span className="text-xs text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            → Hóa {item.tamHoi.hoa}
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
      </div>

      {/* Bảng Tương Hình, Lục Hại, Lục Phá */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-orange-200 dark:border-orange-800 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4">
          <h3 className="text-2xl font-black">⚔ Tương Hình, Lục Hại & Lục Phá</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-100 dark:bg-orange-950">
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-64">Địa Chi</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-48">⚔ Tương Hình</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-48">💔 Lục Hại</th>
                <th className="px-6 py-4 text-center font-black text-lg text-gray-900 dark:text-gray-100 w-48">💥 Lục Phá</th>
              </tr>
            </thead>
            <tbody>
              {diaChiQuanHe.map((item, index) => {
                const chiInfo = diaChiData.find(c => c.chi === item.chi);
                const colors = chiInfo ? getNguHanhColor(chiInfo.nguHanh) : { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' };

                return (
                  <>
                  <tr
                    key={item.chi}
                    className={`border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    <td className="px-6 py-4 align-middle text-center">
                      <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl font-bold border-2 ${colors.border} w-56 justify-center`}>
                        <span>{chiIcons[item.chi]}</span>
                        <span className="text-sm opacity-60">{chiInfo?.cucTinh === 'Dương' ? '➕' : '➖'}</span>
                        <span className="whitespace-nowrap">{chiInfo?.ten || item.chi}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.hinh && item.hinh.length > 0 ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {item.hinh.map((h) => (
                              <span key={h} className="text-orange-900 dark:text-orange-100 font-bold flex items-center gap-1 whitespace-nowrap">
                                <span>{chiIcons[h]}</span>
                                {h}
                              </span>
                            ))}
                          </div>
                          {item.hinhYNghia && (
                            <button
                              onClick={() => toggleExpand(`hinh-${item.chi}`)}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedChi === `hinh-${item.chi}` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.hai ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-red-900 dark:text-red-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.hai]}</span>
                            {item.hai}
                          </span>
                          {item.haiYNghia && (
                            <button
                              onClick={() => toggleExpand(`hai-${item.chi}`)}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedChi === `hai-${item.chi}` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 align-middle text-center">
                      {item.pha ? (
                        <div className="inline-flex flex-col gap-1 items-center">
                          <span className="text-rose-900 dark:text-rose-100 font-bold flex items-center gap-2 whitespace-nowrap">
                            <span>{chiIcons[item.pha]}</span>
                            {item.pha}
                          </span>
                          {item.phaYNghia && (
                            <button
                              onClick={() => toggleExpand(`pha-${item.chi}`)}
                              className="text-xs text-blue-900 dark:text-blue-100 hover:underline shrink-0"
                            >
                              {expandedChi === `pha-${item.chi}` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                  {expandedChi === `hinh-${item.chi}` && item.hinhYNghia && (
                    <tr key={`${item.chi}-hinh-detail`}>
                      <td colSpan={4} className="px-6 py-4 bg-orange-50 dark:bg-orange-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                            📌 Ý nghĩa Tương Hình {item.chi} - {item.hinh?.join(', ')}:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-orange-900 dark:text-orange-100">
                            {item.hinhYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                  {expandedChi === `hai-${item.chi}` && item.haiYNghia && (
                    <tr key={`${item.chi}-hai-detail`}>
                      <td colSpan={4} className="px-6 py-4 bg-red-50 dark:bg-red-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
                            📌 Ý nghĩa Lục Hại {item.chi} - {item.hai}:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-red-900 dark:text-red-100">
                            {item.haiYNghia.map((y, idx) => (
                              <li key={idx}>{y}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                  {expandedChi === `pha-${item.chi}` && item.phaYNghia && (
                    <tr key={`${item.chi}-pha-detail`}>
                      <td colSpan={4} className="px-6 py-4 bg-rose-50 dark:bg-rose-950">
                        <div className="space-y-2">
                          <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">
                            📌 Ý nghĩa Lục Phá {item.chi} - {item.pha}:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-rose-900 dark:text-rose-100">
                            {item.phaYNghia.map((y, idx) => (
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
      </div>

      {/* Chú thích */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700">
          <h3 className="font-black text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <span>💫</span> Lục Hợp
          </h3>
          <p className="text-sm text-blue-900 dark:text-blue-100">
            6 cặp Địa Chi hài hòa, kết hợp tốt, hóa thành ngũ hành mới
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-950 rounded-2xl p-6 border-2 border-red-300 dark:border-red-700">
          <h3 className="font-black text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
            <span>⚡</span> Lục Xung
          </h3>
          <p className="text-sm text-red-900 dark:text-red-100">
            6 cặp đối lập, xung khắc mạnh mẽ, gây mâu thuẫn
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700">
          <h3 className="font-black text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
            <span>🔮</span> Tam Hợp
          </h3>
          <p className="text-sm text-purple-900 dark:text-purple-100">
            4 bộ 3 Chi hòa hợp, tạo thành cục mạnh
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 rounded-2xl p-6 border-2 border-pink-300 dark:border-pink-700">
          <h3 className="font-black text-pink-800 dark:text-pink-200 mb-2 flex items-center gap-2">
            <span>🌸</span> Tam Hội
          </h3>
          <p className="text-sm text-pink-900 dark:text-pink-100">
            4 bộ 3 Chi theo mùa, hội tụ khí của một mùa
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-700">
          <h3 className="font-black text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
            <span>⚔</span> Tương Hình
          </h3>
          <p className="text-sm text-orange-900 dark:text-orange-100">
            Các Chi hình phạt lẫn nhau, gây bất lợi
          </p>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950 rounded-2xl p-6 border-2 border-rose-300 dark:border-rose-700">
          <h3 className="font-black text-rose-800 dark:text-rose-200 mb-2 flex items-center gap-2">
            <span>💔</span> Lục Hại & 💥 Lục Phá
          </h3>
          <p className="text-sm text-rose-900 dark:text-rose-100">
            Các cặp gây hại và phá hoại, cần tránh
          </p>
        </div>
      </div>
    </div>
  );
};
