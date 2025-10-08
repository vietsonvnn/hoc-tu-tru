import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface BodyPart {
  ten: string;
  nguHanh: NguHanhType;
  boPhan: string[];
  position: { top: string; left: string };
  icon: string;
}

const bodyParts: BodyPart[] = [
  {
    ten: 'Kim',
    nguHanh: 'Kim',
    boPhan: ['Phổi', 'Hệ hô hấp', 'Thịt trắng', 'Ruột', 'Rốn', 'Bắp đùi', 'Khí quản', 'Cổ họng'],
    position: { top: '25%', left: '50%' },
    icon: '🫁',
  },
  {
    ten: 'Mộc',
    nguHanh: 'Mộc',
    boPhan: ['Gan', 'Mật', 'Đầu', 'Mặt', 'Gáy', 'Tay', 'Ngón tay'],
    position: { top: '30%', left: '70%' },
    icon: '🧠',
  },
  {
    ten: 'Thủy',
    nguHanh: 'Thủy',
    boPhan: ['Thận', 'Bàng quang', 'Chân', 'Bàn chân', 'Cẳng chân', 'Tinh dịch', 'Niệu đạo'],
    position: { top: '70%', left: '50%' },
    icon: '🦵',
  },
  {
    ten: 'Hỏa',
    nguHanh: 'Hỏa',
    boPhan: ['Tim', 'Ruột non', 'Máu huyết', 'Mắt', 'Vai', 'Mặt', 'Răng', 'Túi màng tim', 'Tam tiêu'],
    position: { top: '25%', left: '30%' },
    icon: '❤️',
  },
  {
    ten: 'Thổ',
    nguHanh: 'Thổ',
    boPhan: ['Lá lách (Tỳ)', 'Dạ dày (Vị)', 'Bụng', 'Sườn', 'Vai', 'Ngực', 'Sống lưng', 'Chân cẳng'],
    position: { top: '45%', left: '50%' },
    icon: '🫃',
  },
];

export const BodyMap = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);

  const handlePartClick = (part: BodyPart) => {
    setSelectedPart(selectedPart?.ten === part.ten ? null : part);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ngũ Hành trong Cơ Thể Người
        </h2>
        <p className="text-gray-600 text-lg">
          Click vào mỗi phần để xem các cơ quan thuộc Ngũ Hành tương ứng
        </p>
      </motion.div>

      <div className="relative w-full max-w-2xl mx-auto mb-8">
        {/* Hình người cách điệu bằng SVG */}
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl">
          <svg viewBox="0 0 200 400" className="w-full h-auto">
            {/* Đầu */}
            <circle cx="100" cy="50" r="35" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />

            {/* Thân */}
            <rect x="70" y="85" width="60" height="120" rx="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />

            {/* Tay trái */}
            <rect x="30" y="100" width="40" height="15" rx="7" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />

            {/* Tay phải */}
            <rect x="130" y="100" width="40" height="15" rx="7" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />

            {/* Chân trái */}
            <rect x="75" y="205" width="20" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />

            {/* Chân phải */}
            <rect x="105" y="205" width="20" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          </svg>

          {/* Các điểm tương tác */}
          {bodyParts.map((part, index) => {
            const colors = getNguHanhColor(part.nguHanh);
            const isSelected = selectedPart?.ten === part.ten;

            return (
              <motion.div
                key={part.ten}
                className="absolute cursor-pointer z-10"
                style={{
                  top: part.position.top,
                  left: part.position.left,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePartClick(part)}
              >
                <div
                  className={`${colors.bg} ${isSelected ? 'ring-4 ring-white shadow-2xl' : 'shadow-lg'}
                    w-16 h-16 rounded-full flex items-center justify-center
                    border-4 ${colors.border} transition-all duration-300`}
                >
                  <div className="text-3xl">{part.icon}</div>
                </div>
                <div className={`text-center mt-2 font-bold ${colors.text} text-xs`}>
                  {part.ten}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Chi tiết bộ phận đã chọn */}
      <AnimatePresence>
        {selectedPart && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`${getNguHanhColor(selectedPart.nguHanh).bg} rounded-3xl p-8 shadow-2xl`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-6xl">{selectedPart.icon}</div>
                <div className="text-center">
                  <h3 className={`text-4xl font-black ${getNguHanhColor(selectedPart.nguHanh).text} mb-2`}>
                    Ngũ Hành {selectedPart.nguHanh}
                  </h3>
                  <div className="text-xl font-bold text-white/90">
                    Cơ quan thuộc {selectedPart.nguHanh}
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className={`font-black text-xl mb-4 ${getNguHanhColor(selectedPart.nguHanh).text} flex items-center gap-2`}>
                  <span>🫀</span> Các bộ phận cơ thể
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {selectedPart.boPhan.map((bo) => (
                    <div
                      key={bo}
                      className="bg-white/40 px-4 py-3 rounded-xl font-bold text-gray-800 text-center"
                    >
                      {bo}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedPart(null)}
                  className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl font-bold hover:bg-white/50 transition-all"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bảng tổng hợp */}
      <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-4">
          <h3 className="text-2xl font-black">📊 Bảng Ngũ Hành - Cơ Thể</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Ngũ Hành</th>
                <th className="px-6 py-4 text-left font-bold">Cơ quan chính</th>
                <th className="px-6 py-4 text-left font-bold">Các bộ phận liên quan</th>
              </tr>
            </thead>
            <tbody>
              {bodyParts.map((part, index) => {
                const colors = getNguHanhColor(part.nguHanh);
                return (
                  <tr
                    key={part.ten}
                    className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                    onClick={() => handlePartClick(part)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`${colors.bg} w-10 h-10 rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                          <span className="text-xl">{part.icon}</span>
                        </div>
                        <span className="font-bold text-gray-800">{part.nguHanh}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-700">{part.boPhan[0]}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {part.boPhan.slice(1).join(', ')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chú thích */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
        <h4 className="font-black text-lg mb-4 text-gray-800 flex items-center gap-2">
          <span>💡</span> Lưu ý:
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-bold">• Mỗi Ngũ Hành</span> chi phối một nhóm cơ quan trong cơ thể người
          </p>
          <p>
            <span className="font-bold">• Kim:</span> Hệ hô hấp, phổi, da
          </p>
          <p>
            <span className="font-bold">• Mộc:</span> Gan, mật, hệ thần kinh
          </p>
          <p>
            <span className="font-bold">• Thủy:</span> Thận, bàng quang, hệ tiết niệu
          </p>
          <p>
            <span className="font-bold">• Hỏa:</span> Tim, tuần hoàn, tinh thần
          </p>
          <p>
            <span className="font-bold">• Thổ:</span> Lá lách, dạ dày, hệ tiêu hóa
          </p>
        </div>
      </div>
    </div>
  );
};
