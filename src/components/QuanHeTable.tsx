import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quanHeNguHanhData } from '../data/quanHeNguHanh';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

const elementIcons: Record<NguHanhType, string> = {
  Kim: '🔱',
  Mộc: '🌳',
  Thủy: '💧',
  Hỏa: '🔥',
  Thổ: '⛰️',
};

const relationTypes = {
  Sinh: { label: 'Sinh quá độ', icon: '🌊', color: 'from-blue-500 to-cyan-500' },
  Tiet: { label: 'Tiết quá độ', icon: '⚖️', color: 'from-purple-500 to-pink-500' },
  Khac: { label: 'Khắc quá độ', icon: '⚔️', color: 'from-red-500 to-orange-500' },
  Hao: { label: 'Hao quá độ', icon: '💨', color: 'from-yellow-500 to-amber-500' },
  PhanSinh: { label: 'Phản sinh', icon: '🔄', color: 'from-indigo-500 to-blue-500' },
  PhanKhac: { label: 'Phản khắc', icon: '↩️', color: 'from-rose-500 to-pink-500' },
  TuongThua: { label: 'Tương thừa', icon: '➕', color: 'from-orange-500 to-red-500' },
  TuongVu: { label: 'Tương vũ', icon: '⚡', color: 'from-violet-500 to-purple-500' },
};

export const QuanHeTable = () => {
  const [selectedHanh, setSelectedHanh] = useState<NguHanhType | null>(null);
  const [selectedRelation, setSelectedRelation] = useState<string | null>(null);

  const handleCellClick = (hanh: NguHanhType, loai: string) => {
    if (selectedHanh === hanh && selectedRelation === loai) {
      setSelectedHanh(null);
      setSelectedRelation(null);
    } else {
      setSelectedHanh(hanh);
      setSelectedRelation(loai);
    }
  };

  const getSelectedData = () => {
    if (!selectedHanh || !selectedRelation) return null;
    const hanhData = quanHeNguHanhData.find((h) => h.hanh === selectedHanh);
    return hanhData?.cacQuanHe.find((qh) => qh.loai === selectedRelation);
  };

  const selectedData = getSelectedData();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Quan Hệ Ngũ Hành
        </h2>
        <p className="text-gray-600 text-lg">
          Click vào ô để xem chi tiết quan hệ quá độ và cách giải cứu
        </p>
      </motion.div>

      {/* Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="px-6 py-4 text-left font-black text-lg">Cát hung</th>
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
              {Object.entries(relationTypes).map(([key, { label, icon, color }]) => (
                <tr key={key} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className={`px-6 py-4 font-bold bg-gradient-to-r ${color} text-white`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{icon}</span>
                      <span>{label}</span>
                    </div>
                  </td>
                  {(['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as NguHanhType[]).map((hanh) => {
                    const hanhData = quanHeNguHanhData.find((h) => h.hanh === hanh);
                    const relation = hanhData?.cacQuanHe.find((qh) => qh.loai === key);
                    const isSelected = selectedHanh === hanh && selectedRelation === key;
                    const colors = getNguHanhColor(hanh);

                    return (
                      <td
                        key={`${hanh}-${key}`}
                        className={`px-4 py-6 text-sm cursor-pointer transition-all ${
                          isSelected ? `${colors.bg} ${colors.text} scale-95` : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleCellClick(hanh, key)}
                      >
                        <div className="space-y-2">
                          <div className={`font-semibold ${isSelected ? '' : 'text-gray-700'}`}>
                            {relation?.quaDo || 'N/A'}
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
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`${getNguHanhColor(selectedHanh!).bg} rounded-3xl p-8 shadow-2xl`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{elementIcons[selectedHanh!]}</div>
                <div>
                  <h3 className={`text-3xl font-black ${getNguHanhColor(selectedHanh!).text} mb-2`}>
                    {selectedHanh} - {relationTypes[selectedRelation as keyof typeof relationTypes].label}
                  </h3>
                  <div className="flex items-center gap-2 text-lg">
                    <span className="text-4xl">{relationTypes[selectedRelation as keyof typeof relationTypes].icon}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className={`font-black text-xl mb-3 ${getNguHanhColor(selectedHanh!).text} flex items-center gap-2`}>
                    <span>⚠️</span> Quá độ là cát hung
                  </div>
                  <p className={`${getNguHanhColor(selectedHanh!).text} opacity-90 leading-relaxed text-lg`}>
                    {selectedData.quaDo}
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className={`font-black text-xl mb-3 ${getNguHanhColor(selectedHanh!).text} flex items-center gap-2`}>
                    <span>💡</span> Giải cứu là cát lợi
                  </div>
                  <p className={`${getNguHanhColor(selectedHanh!).text} opacity-90 leading-relaxed text-lg`}>
                    {selectedData.giaiCuu}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setSelectedHanh(null);
                    setSelectedRelation(null);
                  }}
                  className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl font-bold hover:bg-white/50 transition-all"
                >
                  Đóng chi tiết
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
        <h4 className="font-black text-lg mb-4 text-gray-800">📚 Chú thích:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {Object.entries(relationTypes).map(([key, { label, icon, color }]) => (
            <div key={key} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-lg`}>
                {icon}
              </div>
              <div>
                <div className="font-bold text-gray-800">{label}</div>
                <div className="text-gray-600 text-xs">
                  {key === 'Sinh' && 'Sinh sản quá mức gây hại'}
                  {key === 'Tiet' && 'Tiết khí quá mức làm yếu'}
                  {key === 'Khac' && 'Khắc chế quá mạnh gây suy'}
                  {key === 'Hao' && 'Hao tổn quá độ mất cân bằng'}
                  {key === 'PhanSinh' && 'Con mạnh quá hại mẹ'}
                  {key === 'PhanKhac' && 'Kẻ bị khắc mạnh hơn kẻ khắc'}
                  {key === 'TuongThua' && 'Khắc theo chiều thuận quá mức'}
                  {key === 'TuongVu' && 'Yếu gặp mạnh bị lăng vũ'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
