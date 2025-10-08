import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface BodyRegion {
  ten: string;
  nguHanh: NguHanhType;
  position: { top: string; left: string };
  icon: string;
}

const bodyRegions: BodyRegion[] = [
  // Đầu - Mộc
  {
    ten: 'Đầu & Mặt',
    nguHanh: 'Mộc',
    position: { top: '12%', left: '50%' },
    icon: '🧠',
  },
  // Tay - Mộc
  {
    ten: 'Tay',
    nguHanh: 'Mộc',
    position: { top: '27%', left: '20%' },
    icon: '✋',
  },
  // Ngực/Phổi - Kim (phải)
  {
    ten: 'Phổi',
    nguHanh: 'Kim',
    position: { top: '23%', left: '60%' },
    icon: '🫁',
  },
  // Tim - Hỏa (trái)
  {
    ten: 'Tim',
    nguHanh: 'Hỏa',
    position: { top: '23%', left: '40%' },
    icon: '❤️',
  },
  // Bụng/Dạ dày - Thổ
  {
    ten: 'Bụng & Dạ Dày',
    nguHanh: 'Thổ',
    position: { top: '38%', left: '50%' },
    icon: '🫃',
  },
  // Thận - Thủy
  {
    ten: 'Thận',
    nguHanh: 'Thủy',
    position: { top: '42%', left: '70%' },
    icon: '🫘',
  },
  // Chân - Thủy
  {
    ten: 'Chân',
    nguHanh: 'Thủy',
    position: { top: '75%', left: '50%' },
    icon: '🦵',
  },
];

const nguHanhDetails: Record<NguHanhType, { boPhan: string[] }> = {
  Kim: { boPhan: ['Phổi', 'Hệ hô hấp', 'Da', 'Lông', 'Ruột già', 'Khí quản', 'Cổ họng', 'Mũi'] },
  Mộc: { boPhan: ['Gan', 'Mật', 'Đầu', 'Mặt', 'Gáy', 'Tay', 'Ngón tay', 'Mắt', 'Móng', 'Gân'] },
  Thủy: { boPhan: ['Thận', 'Bàng quang', 'Chân', 'Bàn chân', 'Cẳng chân', 'Tinh dịch', 'Niệu đạo', 'Tai', 'Xương'] },
  Hỏa: { boPhan: ['Tim', 'Ruột non', 'Máu huyết', 'Lưỡi', 'Vai', 'Mạch máu', 'Răng', 'Túi màng tim', 'Tam tiêu'] },
  Thổ: { boPhan: ['Lá lách (Tỳ)', 'Dạ dày (Vị)', 'Bụng', 'Sườn', 'Ngực', 'Sống lưng', 'Miệng', 'Môi', 'Thịt'] },
};

export const BodyMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);

  const handleRegionClick = (region: BodyRegion) => {
    setSelectedRegion(selectedRegion?.ten === region.ten ? null : region);
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

          {/* Các điểm tương tác - mapping vùng cơ thể */}
          {bodyRegions.map((region, index) => {
            const colors = getNguHanhColor(region.nguHanh);
            const isSelected = selectedRegion?.ten === region.ten;

            return (
              <motion.div
                key={region.ten}
                className="absolute cursor-pointer z-10"
                style={{
                  top: region.position.top,
                  left: region.position.left,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRegionClick(region)}
              >
                <div
                  className={`${colors.bg} ${isSelected ? 'ring-4 ring-white shadow-2xl' : 'shadow-lg'}
                    w-14 h-14 rounded-full flex items-center justify-center
                    border-4 ${colors.border} transition-all duration-300`}
                >
                  <div className="text-2xl">{region.icon}</div>
                </div>
                <div className={`text-center mt-1 font-bold ${colors.text} text-xs whitespace-nowrap`}>
                  {region.ten}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Chi tiết bộ phận đã chọn */}
      <AnimatePresence>
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`${getNguHanhColor(selectedRegion.nguHanh).bg} rounded-3xl p-8 shadow-2xl`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-6xl">{selectedRegion.icon}</div>
                <div className="text-center">
                  <h3 className={`text-4xl font-black ${getNguHanhColor(selectedRegion.nguHanh).text} mb-2`}>
                    {selectedRegion.ten} - Ngũ Hành {selectedRegion.nguHanh}
                  </h3>
                  <div className="text-xl font-bold text-white/90">
                    Các bộ phận thuộc {selectedRegion.nguHanh}
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className={`font-black text-xl mb-4 ${getNguHanhColor(selectedRegion.nguHanh).text} flex items-center gap-2`}>
                  <span>🫀</span> Tất cả bộ phận cơ thể thuộc {selectedRegion.nguHanh}
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {nguHanhDetails[selectedRegion.nguHanh].boPhan.map((bo) => (
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
                  onClick={() => setSelectedRegion(null)}
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
                <th className="px-6 py-4 text-left font-bold">Các bộ phận cơ thể</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(nguHanhDetails).map(([nguHanh, data], index) => {
                const colors = getNguHanhColor(nguHanh as NguHanhType);
                return (
                  <tr
                    key={nguHanh}
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                          <span className="text-2xl font-bold">{nguHanh}</span>
                        </div>
                        <span className="font-bold text-gray-800 text-lg">{nguHanh}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {data.boPhan.map((bo) => (
                          <span
                            key={bo}
                            className={`${colors.bg} px-3 py-1 rounded-lg text-sm font-semibold text-gray-800 border ${colors.border}`}
                          >
                            {bo}
                          </span>
                        ))}
                      </div>
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
