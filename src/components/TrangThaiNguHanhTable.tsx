import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType, TrangThaiType } from '../types';
import { getNguHanhColor } from '../utils/colors';
import { getTrangThaiInfo } from '../utils/nguHanhRelations';

const trangThaiMatrix: Record<string, Record<NguHanhType, TrangThaiType>> = {
  'Xuân': { Kim: 'Tù', Mộc: 'Vượng', Thủy: 'Hưu', Hỏa: 'Tướng', Thổ: 'Tử' },
  'Hạ': { Kim: 'Tử', Mộc: 'Hưu', Thủy: 'Tù', Hỏa: 'Vượng', Thổ: 'Tướng' },
  'Thu': { Kim: 'Vượng', Mộc: 'Tử', Thủy: 'Tướng', Hỏa: 'Tù', Thổ: 'Hưu' },
  'Đông': { Kim: 'Hưu', Mộc: 'Tướng', Thủy: 'Vượng', Hỏa: 'Tử', Thổ: 'Tù' },
  'Tứ Quý': { Kim: 'Tướng', Mộc: 'Tù', Thủy: 'Tử', Hỏa: 'Hưu', Thổ: 'Vượng' },
};

const elementIcons: Record<NguHanhType, string> = {
  Kim: '🔱',
  Mộc: '🌳',
  Thủy: '💧',
  Hỏa: '🔥',
  Thổ: '⛰️',
};

const seasonIcons: Record<string, string> = {
  'Xuân': '🌸',
  'Hạ': '☀️',
  'Thu': '🍂',
  'Đông': '❄️',
  'Tứ Quý': '🗓️',
};

export const TrangThaiNguHanhTable = () => {
  const [selectedCell, setSelectedCell] = useState<{ mua: string; hanh: NguHanhType } | null>(null);

  const handleCellClick = (mua: string, hanh: NguHanhType) => {
    if (selectedCell?.mua === mua && selectedCell?.hanh === hanh) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ mua, hanh });
    }
  };

  const getSelectedInfo = () => {
    if (!selectedCell) return null;
    const trangThai = trangThaiMatrix[selectedCell.mua][selectedCell.hanh];
    return getTrangThaiInfo(trangThai);
  };

  const selectedInfo = getSelectedInfo();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Vượng - Tướng - Hưu - Tù - Tử
        </h2>
        <p className="text-gray-600 text-lg">
          Trạng thái của Ngũ Hành theo 4 mùa và Tứ Quý (4 mùa đất)
        </p>
      </motion.div>

      {/* Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="px-6 py-4 text-left font-black text-lg">Mùa / Hành</th>
                {(['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as NguHanhType[]).map((hanh) => (
                  <th key={hanh} className="px-6 py-4 text-center font-black text-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">{elementIcons[hanh]}</span>
                      <span>{hanh}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(trangThaiMatrix).map((mua, idx) => (
                <tr
                  key={mua}
                  className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                >
                  <td className="px-6 py-4 font-black text-lg bg-gradient-to-r from-indigo-100 to-purple-100">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{seasonIcons[mua]}</span>
                      <span>{mua}</span>
                    </div>
                  </td>
                  {(['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as NguHanhType[]).map((hanh) => {
                    const trangThai = trangThaiMatrix[mua][hanh];
                    const info = getTrangThaiInfo(trangThai);
                    const isSelected = selectedCell?.mua === mua && selectedCell?.hanh === hanh;
                    const colors = getNguHanhColor(hanh);

                    return (
                      <td
                        key={`${mua}-${hanh}`}
                        className={`px-4 py-6 text-center cursor-pointer transition-all ${
                          isSelected ? `${colors.bg} scale-95` : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleCellClick(mua, hanh)}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-full px-3 py-2 rounded-lg ${info.color}`}>
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <span className="text-lg">{info.icon}</span>
                              <span className={`font-bold text-base ${isSelected ? colors.text : ''}`}>
                                {info.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedInfo && selectedCell && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`${getNguHanhColor(selectedCell.hanh).bg} rounded-3xl p-8 shadow-2xl`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{elementIcons[selectedCell.hanh]}</div>
                <div>
                  <h3 className={`text-3xl font-black ${getNguHanhColor(selectedCell.hanh).text} mb-2`}>
                    {selectedCell.hanh} - {seasonIcons[selectedCell.mua]} {selectedCell.mua}
                  </h3>
                  <div className="flex items-center gap-3 text-2xl">
                    <span>{selectedInfo.icon}</span>
                    <span className={`font-bold ${getNguHanhColor(selectedCell.hanh).text}`}>
                      {selectedInfo.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className={`font-black text-xl mb-3 ${getNguHanhColor(selectedCell.hanh).text}`}>
                  📖 Ý nghĩa
                </div>
                <p className={`${getNguHanhColor(selectedCell.hanh).text} opacity-90 leading-relaxed text-lg`}>
                  {selectedInfo.description}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedCell(null)}
                  className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl font-bold hover:bg-white/50 transition-all"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
        <h4 className="font-black text-lg mb-4 text-gray-800">📚 Chú thích trạng thái:</h4>
        <div className="grid md:grid-cols-5 gap-4 text-sm">
          {(['Vượng', 'Tướng', 'Hưu', 'Tù', 'Tử'] as TrangThaiType[]).map((tt) => {
            const info = getTrangThaiInfo(tt);
            return (
              <div key={tt} className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {info.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{info.label}</div>
                  <div className="text-gray-600 text-xs leading-tight">
                    {info.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tứ Quý Explanation */}
      <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🗓️</span>
          <div>
            <h4 className="font-black text-lg text-gray-800 mb-2">
              Tứ Quý (4 mùa đất) là gì?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Tứ Quý là 4 tháng cuối mỗi mùa (tháng 3, 6, 9, 12 âm lịch), còn gọi là mùa Thổ.
              Đây là thời điểm chuyển tiếp giữa các mùa, Thổ đứng ở trung tâm điều hòa và Vượng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
